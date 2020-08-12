/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path'
import * as shell from 'shelljs'
import * as rimraf from 'rimraf'

// https://github.com/shelljs/shelljs/issues/469
process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'))
const PROTO_DIR = path.join(__dirname, '../node_modules/@webalytic/protorepo')
const SHARED_DIR = path.join(__dirname, '../shared')

rimraf.sync(`${SHARED_DIR}/common/*`)

function buildClasess() {
  const PROTO_FILES = [
    ['/common', '/error.proto']
  ]

  // eslint-disable-next-line no-restricted-syntax
  for (const fileTuple of PROTO_FILES) {
    const [dir, file] = fileTuple
    const js = `${SHARED_DIR}${dir}${file.replace('.proto', '.js')}`
    const ts = `${SHARED_DIR}${dir}${file.replace('.proto', '.d.ts')}`
    const proto = `${PROTO_DIR}${dir}${file}`

    shell.exec('pbjs '
    + '-t static-module '
    + '-w commonjs '
    + `-o ${js} ${proto}`)

    shell.exec(`pbts -o ${ts} ${js}`)
  }
}

buildClasess()
