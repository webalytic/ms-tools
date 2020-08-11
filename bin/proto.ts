/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path'
import * as shell from 'shelljs'
import * as rimraf from 'rimraf'

// https://github.com/shelljs/shelljs/issues/469
process.env.PATH += (path.delimiter + path.join(process.cwd(), 'node_modules', '.bin'))

const PROTO_DIR = path.join(__dirname, '../node_modules/@webalytic/protorepo')

const SHARED_DIR = path.join(__dirname, '../shared')
const VO_DIR = path.join(SHARED_DIR, '/value-objects')

rimraf.sync(`${VO_DIR}/*`)

const PROTO_EVENTS = [
  {
    js: `${VO_DIR}/error.js`,
    ts: `${VO_DIR}/error.d.ts`,
    proto: [
      `${PROTO_DIR}/shared/error.proto`
    ].join(' ')
  }
]

// eslint-disable-next-line no-restricted-syntax
for (const protoEvent of PROTO_EVENTS) {
  shell.exec('pbjs '
  + '-t static-module '
  + '-w commonjs '
  + `-o ${protoEvent.js} ${protoEvent.proto}`)

  shell.exec(`pbts -o ${protoEvent.ts} ${protoEvent.js}`)
}
