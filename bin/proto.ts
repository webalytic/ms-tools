/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path'
import * as shell from 'shelljs'
import * as rimraf from 'rimraf'
import * as fs from 'fs'
import glob from 'glob'

// https://github.com/shelljs/shelljs/issues/469
process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'))

const SHARED_DIR = path.join(__dirname, '../shared')

clearSharedDir()
buildClasess()

// **
function clearSharedDir() {
  rimraf.sync(`${SHARED_DIR}/common/*`)
  rimraf.sync(`${SHARED_DIR}/configuration/*`)
  rimraf.sync(`${SHARED_DIR}/geoip/*`)
  rimraf.sync(`${SHARED_DIR}/log-collector/*`)
  rimraf.sync(`${SHARED_DIR}/log-processing/*`)
}

function buildClasess() {
  const PROTO_DIR = getProtoDir()
  const data = glob.sync(path.join(__dirname, '../node_modules/@webalytic/protorepo/**/*.proto'))
  const PROTO_FILES = []
  data.forEach((absPath) => {
    const protoFile = fs.readFileSync(absPath).toString()
    const importsDefs = protoFile.match(/(import public "\S+";)+/g)

    const relPath = absPath.replace(path.join(__dirname, '../node_modules/@webalytic/protorepo/'), '')
    const protos = []

    if (importsDefs) {
      importsDefs.forEach((imp) => {
        protos.push(`/${imp.match(/import public "(\S+)";/)[1]}`)
      })
    }
    protos.push(`/${relPath}`)

    PROTO_FILES.push({
      filePrefix: `/${relPath.replace('.proto', '')}`,
      protos
    })
  })

  // eslint-disable-next-line no-restricted-syntax
  for (const fileObj of PROTO_FILES) {
    const { filePrefix, protos } = fileObj
    const js = `${SHARED_DIR}${filePrefix}.js`
    const ts = `${SHARED_DIR}${filePrefix}.d.ts`
    const proto = protos.map((x) => {
      shell.exec(`cp ${PROTO_DIR}${x} ${SHARED_DIR}${x}`)
      return `${PROTO_DIR}${x}`
    }).join(' ')

    shell.exec('pbjs '
    + '-t static-module '
    + '-w commonjs '
    + `-o ${js} ${proto}`)

    shell.exec(`pbts -o ${ts} ${js}`)
  }
}

function getProtoDir() {
  let result = path.join(__dirname, '../node_modules/@webalytic/protorepo')

  // Todo: bad code, need solution with clean require protobuf files
  try {
    fs.statSync(result)
  } catch (error) {
    result = path.join(__dirname, '../../../node_modules/@webalytic/protorepo')
  }

  return result
}
