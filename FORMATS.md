# jscpd Supported Formats

This document lists all language formats recognized by jscpd, their file extensions, and formats planned for future support.

## Supported Formats

These formats are fully supported: jscpd detects them automatically by file extension and tokenizes them with their dedicated grammar.

| Format | Extensions |
|--------|------------|
| `actionscript` | `.as` |
| `ada` | `.ada` |
| `antlr4` | `.g4` |
| `apex` | `.cls` `.trigger` `.apex` |
| `apl` | `.apl` |
| `aspnet` | `.asp` `.aspx` |
| `awk` | `.awk` |
| `bash` | `.sh` `.ksh` `.bash` |
| `basic` | `.bas` |
| `bicep` | `.bicep` |
| `brainfuck` | `.b` `.bf` |
| `c` | `.c` `.z80` |
| `c-header` | `.h` |
| `cfml` | `.cfm` |
| `cfscript` | `.cfc` |
| `clojure` | `.cljs` `.clj` `.cljc` `.cljx` `.edn` |
| `cmake` | `.cmake` |
| `coffeescript` | `.coffee` |
| `cpp` | `.cpp` `.c++` `.cc` `.cxx` |
| `cpp-header` | `.hpp` `.h++` `.hh` `.hxx` |
| `crystal` | `.cr` |
| `csharp` | `.cs` |
| `csv` | `.csv` |
| `css` | `.css` `.gss` |
| `d` | `.d` |
| `dart` | `.dart` |
| `diff` | `.diff` `.patch` |
| `dot` | `.dot` `.gv` |
| `eiffel` | `.e` |
| `elm` | `.elm` |
| `erlang` | `.erl` `.erlang` |
| `excel-formula` | `.xlsx` `.xls` |
| `fortran` | `.f` `.for` `.f77` `.f90` |
| `fsharp` | `.fs` |
| `gdscript` | `.gd` |
| `gettext` | `.po` |
| `gherkin` | `.feature` |
| `go` | `.go` |
| `graphql` | `.graphql` |
| `groovy` | `.groovy` `.gradle` |
| `haml` | `.haml` |
| `handlebars` | `.hb` `.hbs` `.handlebars` |
| `haskell` | `.hs` `.lhs` |
| `haxe` | `.hx` `.hxml` |
| `hcl` | `.tf` `.hcl` |
| `idris` | `.idr` |
| `ignore` | `.gitignore` |
| `ini` | `.ini` |
| `java` | `.java` |
| `javascript` | `.js` `.es` `.es6` `.mjs` `.cjs` |
| `json` | `.json` `.map` `.jsonld` |
| `json5` | `.json5` |
| `jsx` | `.jsx` |
| `julia` | `.jl` |
| `kotlin` | `.kt` `.kts` |
| `latex` | `.tex` |
| `less` | `.less` |
| `lilypond` | `.ly` |
| `linker-script` | `.ld` |
| `lisp` | `.cl` `.lisp` `.el` |
| `livescript` | `.ls` |
| `llvm` | `.ll` |
| `log` | `.log` |
| `lua` | `.lua` |
| `markdown` | `.md` `.markdown` `.mkd` `.txt` |
| `markup` | `.html` `.htm` `.xml` `.xsl` `.xslt` `.svg` `.vue` `.ejs` `.jsp` |
| `nsis` | `.nsh` `.nsi` |
| `objectivec` | `.m` `.mm` |
| `ocaml` | `.ocaml` `.ml` `.mli` `.mll` `.mly` |
| `openqasm` | `.qasm` |
| `oz` | `.oz` |
| `pascal` | `.pas` `.p` |
| `perl` | `.pl` `.pm` |
| `php` | `.php` `.phtml` |
| `plant-uml` | `.puml` `.plantuml` |
| `plsql` | `.plsql` |
| `powerquery` | `.pq` |
| `powershell` | `.ps1` `.psd1` `.psm1` |
| `properties` | `.properties` |
| `protobuf` | `.proto` |
| `pug` | `.pug` `.jade` |
| `puppet` | `.pp` `.puppet` |
| `purescript` | `.purs` |
| `python` | `.py` `.pyx` `.pxd` `.pxi` |
| `q` | `.q` |
| `qsharp` | `.qs` |
| `r` | `.r` `.R` |
| `racket` | `.rkt` |
| `rescript` | `.res` |
| `robotframework` | `.robot` |
| `ruby` | `.rb` |
| `rust` | `.rs` |
| `sas` | `.sas` |
| `sass` | `.sass` |
| `scala` | `.scala` |
| `scheme` | `.scm` `.ss` |
| `scss` | `.scss` |
| `smalltalk` | `.st` |
| `smarty` | `.smarty` `.tpl` |
| `solidity` | `.sol` |
| `soy` | `.soy` |
| `sparql` | `.rq` |
| `sql` | `.sql` `.cql` |
| `stylus` | `.styl` `.stylus` |
| `swift` | `.swift` |
| `tap` | `.tap` |
| `tcl` | `.tcl` |
| `textile` | `.textile` |
| `toml` | `.toml` |
| `tsx` | `.tsx` |
| `tt2` | `.tt2` |
| `turtle` | `.ttl` |
| `twig` | `.twig` |
| `typescript` | `.ts` `.mts` `.cts` |
| `unrealscript` | `.uc` |
| `vbnet` | `.vb` |
| `velocity` | `.vtl` |
| `verilog` | `.v` |
| `vhdl` | `.vhd` `.vhdl` |
| `wgsl` | `.wgsl` |
| `wolfram` | `.wl` `.nb` |
| `xquery` | `.xy` `.xquery` |
| `yaml` | `.yaml` `.yml` |
| `zig` | `.zig` |

## Registered Formats (No Extension Mapping)

These formats are registered and have a working grammar. They are **not** auto-detected by file extension but can be selected explicitly via `--format <name>`.

`abap`, `apacheconf`, `applescript`, `arduino`, `arff`, `asciidoc`, `asm6502`, `autohotkey`, `autoit`, `batch`, `bison`, `bnf`, `bro`, `clike`, `csp`, `css-extras`, `cypher`, `dhall`, `django`, `dns-zone-file`, `docker`, `ebnf`, `editorconfig`, `elixir`, `erb`, `factor`, `flow`, `ftl`, `gcode`, `gedcom`, `git`, `glsl`, `gml`, `go-module`, `hlsl`, `http`, `ichigojam`, `icon`, `inform7`, `io`, `j`, `jolie`, `jq`, `kusto`, `liquid`, `lolcode`, `makefile`, `matlab`, `mel`, `mermaid`, `mizar`, `mongodb`, `monkey`, `n1ql`, `n4js`, `nasm`, `nginx`, `nim`, `nix`, `odin`, `opencl`, `parigp`, `processing`, `prolog`, `promql`, `pure`, `qore`, `reason`, `regex`, `rego`, `renpy`, `rest`, `rip`, `roboconf`, `shell-session`, `smali`, `stata`, `typoscript`, `vala`, `vim`, `wasm`, `wiki`, `xeora`, `xojo`

## Planned Formats

| Format | Issue | Status | Blocker |
|--------|-------|--------|---------|
| `astro` | [#618](https://github.com/kucherenko/jscpd/issues/618) | Blocked | No standalone Prism grammar exists yet — PrismJS PR [#3679](https://github.com/PrismJS/prism/pull/3679) unmerged |
