// @ts-nocheck
import * as syntaxes from './syntaxes/index.js';
import * as abap from './syntaxes/languages/abap.js';
import * as actionscript from './syntaxes/languages/actionscript.js';
import * as ada from './syntaxes/languages/ada.js';
import * as apacheconf from './syntaxes/languages/apacheconf.js';
import * as apl from './syntaxes/languages/apl.js';
import * as applescript from './syntaxes/languages/applescript.js';
import * as arff from './syntaxes/languages/arff.js';
import * as asciidoc from './syntaxes/languages/asciidoc.js';
import * as asm6502 from './syntaxes/languages/asm6502.js';
import * as aspnet from './syntaxes/languages/aspnet.js';
import * as autohotkey from './syntaxes/languages/autohotkey.js';
import * as autoit from './syntaxes/languages/autoit.js';
import * as bash from './syntaxes/languages/bash.js';
import * as basic from './syntaxes/languages/basic.js';
import * as batch from './syntaxes/languages/batch.js';
import * as brainfuck from './syntaxes/languages/brainfuck.js';
import * as bro from './syntaxes/languages/bro.js';
import * as c from './syntaxes/languages/c.js';
import * as clike from './syntaxes/languages/clike.js';
import * as clojure from './syntaxes/languages/clojure.js';
import * as coffeescript from './syntaxes/languages/coffeescript.js';
import * as cpp from './syntaxes/languages/cpp.js';
import * as csharp from './syntaxes/languages/csharp.js';
import * as csp from './syntaxes/languages/csp.js';
import * as cssExtras from './syntaxes/languages/css-extras.js';
import * as css from './syntaxes/languages/css.js';
import * as d from './syntaxes/languages/d.js';
import * as dart from './syntaxes/languages/dart.js';
import * as diff from './syntaxes/languages/diff.js';
import * as django from './syntaxes/languages/django.js';
import * as docker from './syntaxes/languages/docker.js';
import * as eiffel from './syntaxes/languages/eiffel.js';
import * as elixir from './syntaxes/languages/elixir.js';
import * as erlang from './syntaxes/languages/erlang.js';
import * as flow from './syntaxes/languages/flow.js';
import * as fortran from './syntaxes/languages/fortran.js';
import * as fsharp from './syntaxes/languages/fsharp.js';
import * as gedcom from './syntaxes/languages/gedcom.js';
import * as gherkin from './syntaxes/languages/gherkin.js';
import * as git from './syntaxes/languages/git.js';
import * as glsl from './syntaxes/languages/glsl.js';
import * as go from './syntaxes/languages/go.js';
import * as graphql from './syntaxes/languages/graphql.js';
import * as groovy from './syntaxes/languages/groovy.js';
import * as haml from './syntaxes/languages/haml.js';
import * as handlebars from './syntaxes/languages/handlebars.js';
import * as haskell from './syntaxes/languages/haskell.js';
import * as haxe from './syntaxes/languages/haxe.js';
import * as hpkp from './syntaxes/languages/hpkp.js';
import * as hsts from './syntaxes/languages/hsts.js';
import * as http from './syntaxes/languages/http.js';
import * as ichigojam from './syntaxes/languages/ichigojam.js';
import * as icon from './syntaxes/languages/icon.js';
import * as inform7 from './syntaxes/languages/inform7.js';
import * as ini from './syntaxes/languages/ini.js';
import * as io from './syntaxes/languages/io.js';
import * as j from './syntaxes/languages/j.js';
import * as java from './syntaxes/languages/java.js';
import * as javascript from './syntaxes/languages/javascript.js';
import * as jolie from './syntaxes/languages/jolie.js';
import * as json from './syntaxes/languages/json.js';
import * as jsx from './syntaxes/languages/jsx.js';
import * as julia from './syntaxes/languages/julia.js';
import * as keyman from './syntaxes/languages/keyman.js';
import * as kotlin from './syntaxes/languages/kotlin.js';
import * as latex from './syntaxes/languages/latex.js';
import * as less from './syntaxes/languages/less.js';
import * as liquid from './syntaxes/languages/liquid.js';
import * as lisp from './syntaxes/languages/lisp.js';
import * as livescript from './syntaxes/languages/livescript.js';
import * as lolcode from './syntaxes/languages/lolcode.js';
import * as lua from './syntaxes/languages/lua.js';
import * as makefile from './syntaxes/languages/makefile.js';
import * as markdown from './syntaxes/languages/markdown.js';
import * as markupTemplating from './syntaxes/languages/markup-templating.js';
import * as markup from './syntaxes/languages/markup.js';
import * as matlab from './syntaxes/languages/matlab.js';
import * as mel from './syntaxes/languages/mel.js';
import * as mizar from './syntaxes/languages/mizar.js';
import * as monkey from './syntaxes/languages/monkey.js';
import * as n4js from './syntaxes/languages/n4js.js';
import * as nasm from './syntaxes/languages/nasm.js';
import * as nginx from './syntaxes/languages/nginx.js';
import * as nim from './syntaxes/languages/nim.js';
import * as nix from './syntaxes/languages/nix.js';
import * as nsis from './syntaxes/languages/nsis.js';
import * as objectivec from './syntaxes/languages/objectivec.js';
import * as ocaml from './syntaxes/languages/ocaml.js';
import * as opencl from './syntaxes/languages/opencl.js';
import * as oz from './syntaxes/languages/oz.js';
import * as parigp from './syntaxes/languages/parigp.js';
import * as parser from './syntaxes/languages/parser.js';
import * as pascal from './syntaxes/languages/pascal.js';
import * as perl from './syntaxes/languages/perl.js';
import * as phpExtras from './syntaxes/languages/php-extras.js';
import * as php from './syntaxes/languages/php.js';
import * as powershell from './syntaxes/languages/powershell.js';
import * as processing from './syntaxes/languages/processing.js';
import * as prolog from './syntaxes/languages/prolog.js';
import * as properties from './syntaxes/languages/properties.js';
import * as protobuf from './syntaxes/languages/protobuf.js';
import * as pug from './syntaxes/languages/pug.js';
import * as puppet from './syntaxes/languages/puppet.js';
import * as pure from './syntaxes/languages/pure.js';
import * as python from './syntaxes/languages/python.js';
import * as q from './syntaxes/languages/q.js';
import * as qore from './syntaxes/languages/qore.js';
import * as r from './syntaxes/languages/r.js';
import * as reason from './syntaxes/languages/reason.js';
import * as renpy from './syntaxes/languages/renpy.js';
import * as rest from './syntaxes/languages/rest.js';
import * as rip from './syntaxes/languages/rip.js';
import * as roboconf from './syntaxes/languages/roboconf.js';
import * as ruby from './syntaxes/languages/ruby.js';
import * as rust from './syntaxes/languages/rust.js';
import * as sas from './syntaxes/languages/sas.js';
import * as sass from './syntaxes/languages/sass.js';
import * as scala from './syntaxes/languages/scala.js';
import * as scheme from './syntaxes/languages/scheme.js';
import * as scss from './syntaxes/languages/scss.js';
import * as smalltalk from './syntaxes/languages/smalltalk.js';
import * as smarty from './syntaxes/languages/smarty.js';
import * as soy from './syntaxes/languages/soy.js';
import * as stylus from './syntaxes/languages/stylus.js';
import * as swift from './syntaxes/languages/swift.js';
import * as tcl from './syntaxes/languages/tcl.js';
import * as textile from './syntaxes/languages/textile.js';
import * as tsx from './syntaxes/languages/tsx.js';
import * as twig from './syntaxes/languages/twig.js';
import * as typescript from './syntaxes/languages/typescript.js';
import * as vbnet from './syntaxes/languages/vbnet.js';
import * as velocity from './syntaxes/languages/velocity.js';
import * as verilog from './syntaxes/languages/verilog.js';
import * as vhdl from './syntaxes/languages/vhdl.js';
import * as vim from './syntaxes/languages/vim.js';
import * as visualBasic from './syntaxes/languages/visual-basic.js';
import * as wasm from './syntaxes/languages/wasm.js';
import * as wiki from './syntaxes/languages/wiki.js';
import * as xeora from './syntaxes/languages/xeora.js';
import * as xojo from './syntaxes/languages/xojo.js';
import * as yaml from './syntaxes/languages/yaml.js';
import * as tap from './languages/tap';
import * as sql from './languages/sql';
import * as plsql from './languages/plsql';
import * as gdscript from './languages/gdscript';

export const languages = {
  abap, actionscript, ada, apacheconf, apl, applescript, arff,
  asciidoc, asm6502, aspnet, autohotkey, autoit, bash, basic, batch,
  brainfuck, bro, c, clike, clojure, coffeescript, cpp, csharp, csp, cssExtras,
  css, d, dart, diff, django, docker, eiffel, elixir, erlang, flow, fortran, fsharp,
  gedcom, gherkin, git, glsl, go, graphql, groovy, haml, handlebars, haskell, haxe,
  hpkp, hsts, http, ichigojam, icon, inform7, ini, io, j, java, javascript, jolie,
  json, jsx, julia, keyman, kotlin, latex, less, liquid, lisp, livescript,
  lolcode, lua, makefile, markdown, markupTemplating, markup, matlab, mel, mizar,
  monkey, n4js, nasm, nginx, nim, nix, nsis, objectivec, ocaml, opencl, oz, parigp,
  parser, pascal, perl, php, phpExtras, powershell, processing, prolog,
  properties, protobuf, pug, puppet, pure, python, q, qore, r, reason, renpy, rest,
  rip, roboconf, ruby, rust, sas, sass, scala, scheme, scss, smalltalk, smarty, soy,
  stylus, swift, tcl, textile, twig, typescript, vbnet, velocity, verilog, vhdl,
  vim, visualBasic, wasm, wiki, xeora, xojo, yaml, tsx, sql, plsql, tap, gdscript
};

export const loadLanguages = (): void => {
  syntaxes.loadLanguages(Object.values(languages).map(v => v.default));
}
