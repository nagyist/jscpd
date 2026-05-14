# jscpd Supported Formats

This document lists all 223 language formats recognized by jscpd, derived from the source of truth in `packages/tokenizer/src/formats.ts`.

**130 formats** are auto-detected by file extension. **88 registered formats** have a grammar but no built-in extension mapping — use `--formats-exts` or `--formats-names` to activate them. An additional **5 formats** (`clike`, `comments`, `hpkp`, `hsts`, `keymap`) are internal grammar dependencies used by other formats. `url` is excluded from detection.

## Supported Formats (Auto-Detected by Extension)

These formats are detected automatically by file extension. No extra flags needed — just point jscpd at your source directory.

### Cross-Format Tokenizers

These formats use bespoke multi-block tokenizers that extract embedded code sections (`<script>`, `<style>`, `<template>`) and resolve each block to the correct sub-format, enabling cross-format duplicate detection (e.g., a `<script>` block in a `.vue` file matched against `.ts` files).

- **`astro`** (`.astro`) — Astro, modern static-site builder component format mixing HTML, JS, and CSS.
- **`svelte`** (`.svelte`) — Svelte, reactive component framework with compiled templates.
- **`vue`** (`.vue`) — Vue Single-File Component, combining template, script, and style blocks.
- **`markdown`** (`.md`, `.markdown`, `.mkd`) — Markdown, lightweight markup language. Fenced code blocks are tokenized independently by language.

### General-Purpose Languages

- **`actionscript`** (`.as`) — Adobe ActionScript, scripting language for Flash and Flex applications.
- **`ada`** (`.ada`) — Ada, strongly-typed language for systems and embedded programming.
- **`antlr4`** (`.g4`) — ANTLR v4 grammar definition files.
- **`apex`** (`.cls`, `.trigger`, `.apex`) — Salesforce Apex, strongly-typed OOP language for the Salesforce platform.
- **`apl`** (`.apl`) — APL, array-oriented programming language.
- **`aspnet`** (`.asp`, `.aspx`) — ASP.NET, Microsoft server-side web application files.
- **`awk`** (`.awk`) — AWK, text-processing scripting language.
- **`bash`** (`.sh`, `.ksh`, `.bash`) — Bash and POSIX shell scripts. Also detected via [shebang](#shebang-detection) for extensionless scripts.
- **`basic`** (`.bas`) — BASIC, beginner-oriented general-purpose programming language.
- **`bicep`** (`.bicep`) — Azure Bicep, infrastructure-as-code DSL for Microsoft Azure.
- **`brainfuck`** (`.b`, `.bf`) — Brainfuck, minimalist esoteric programming language.
- **`c`** (`.c`, `.z80`) — C, general-purpose low-level programming language.
- **`c-header`** (`.h`) — C header files. Inherits `c` grammar.
- **`cfml`** (`.cfm`) — ColdFusion Markup Language, server-side HTML template files. Inherits `markup` grammar.
- **`cfscript`** (`.cfc`) — ColdFusion components written in CFScript.
- **`clojure`** (`.clj`, `.cljs`, `.cljc`, `.cljx`, `.edn`) — Clojure, functional Lisp dialect for the JVM.
- **`cmake`** (`.cmake`) — CMake build system scripts.
- **`coffeescript`** (`.coffee`) — CoffeeScript, transpiled language that compiles to JavaScript.
- **`cpp`** (`.cpp`, `.c++`, `.cc`, `.cxx`) — C++, systems programming language extending C with OOP.
- **`cpp-header`** (`.hpp`, `.h++`, `.hh`, `.hxx`) — C++ header files. Inherits `cpp` grammar.
- **`crystal`** (`.cr`) — Crystal, statically-typed language with Ruby-like syntax.
- **`csharp`** (`.cs`) — C#, Microsoft's OOP language for .NET.
- **`csv`** (`.csv`) — CSV, comma-separated values data files.
- **`css`** (`.css`, `.gss`) — CSS, Cascading Style Sheets for web styling.
- **`d`** (`.d`) — D, systems language combining C speed with modern safety features.
- **`dart`** (`.dart`) — Dart, Google's client-optimized language used in Flutter.
- **`diff`** (`.diff`, `.patch`) — Unified diff and patch files.
- **`dot`** (`.dot`, `.gv`) — Graphviz DOT language for graph and network diagrams.
- **`eiffel`** (`.e`) — Eiffel, OOP language with design-by-contract methodology.
- **`elm`** (`.elm`) — Elm, functional language for front-end web development.
- **`erlang`** (`.erl`, `.erlang`) — Erlang, concurrent functional language for distributed systems.
- **`excel-formula`** (`.xlsx`, `.xls`) — Microsoft Excel spreadsheet files.
- **`fortran`** (`.f`, `.for`, `.f77`, `.f90`) — Fortran, scientific and numerical computing language.
- **`fsharp`** (`.fs`) — F#, functional-first language for .NET.
- **`gdscript`** (`.gd`) — GDScript, scripting language for the Godot game engine.
- **`gettext`** (`.po`) — GNU gettext PO translation and localisation files.
- **`gherkin`** (`.feature`) — Gherkin, BDD scenario language used in Cucumber and Behave.
- **`go`** (`.go`) — Go, statically-typed compiled language from Google.
- **`graphql`** (`.graphql`) — GraphQL, query language for APIs.
- **`groovy`** (`.groovy`, `.gradle`) — Groovy, dynamic JVM language; also covers Gradle build files.
- **`haml`** (`.haml`) — Haml, HTML abstraction markup language.
- **`handlebars`** (`.hb`, `.hbs`, `.handlebars`) — Handlebars, logicless HTML templating language.
- **`haskell`** (`.hs`, `.lhs`) — Haskell, purely functional programming language.
- **`haxe`** (`.hx`, `.hxml`) — Haxe, cross-platform programming language and toolkit.
- **`hcl`** (`.tf`, `.hcl`) — HashiCorp Configuration Language, used in Terraform and Vault.
- **`idris`** (`.idr`) — Idris, dependently-typed functional programming language.
- **`ignore`** (`.gitignore`) — Git and tool ignore-pattern files.
- **`ini`** (`.ini`) — INI, simple key-value configuration file format.
- **`java`** (`.java`) — Java, OOP language for the JVM.
- **`javascript`** (`.js`, `.es`, `.es6`, `.mjs`, `.cjs`) — JavaScript, scripting language for the web and Node.js.
- **`json`** (`.json`, `.map`, `.jsonld`) — JSON, JavaScript Object Notation data interchange format.
- **`json5`** (`.json5`) — JSON5, relaxed JSON with comments and trailing commas.
- **`jsx`** (`.jsx`) — JSX, JavaScript with embedded XML syntax for React.
- **`julia`** (`.jl`) — Julia, high-performance language for scientific computing.
- **`kotlin`** (`.kt`, `.kts`) — Kotlin, modern JVM language fully interoperable with Java.
- **`latex`** (`.tex`) — LaTeX, document preparation and typesetting system.
- **`less`** (`.less`) — Less, CSS preprocessor with variables, mixins, and nesting.
- **`lilypond`** (`.ly`) — LilyPond, text-based music notation language.
- **`linker-script`** (`.ld`) — GNU linker scripts for memory layout control.
- **`lisp`** (`.cl`, `.lisp`, `.el`) — Common Lisp and Emacs Lisp source files.
- **`livescript`** (`.ls`) — LiveScript, functional language that compiles to JavaScript.
- **`llvm`** (`.ll`) — LLVM IR, LLVM Intermediate Representation text format.
- **`log`** (`.log`) — Log files, structured or unstructured application output.
- **`lua`** (`.lua`) — Lua, lightweight embeddable scripting language.
- **`markup`** (`.html`, `.htm`, `.xml`, `.xsl`, `.xslt`, `.svg`, `.ejs`, `.jsp`) — HTML, XML, SVG, and similar markup languages.
- **`nsis`** (`.nsh`, `.nsi`) — NSIS, Nullsoft Scriptable Install System scripts.
- **`objectivec`** (`.m`, `.mm`) — Objective-C, C-based OOP language for Apple platforms.
- **`ocaml`** (`.ocaml`, `.ml`, `.mli`, `.mll`, `.mly`) — OCaml, functional language with strong type inference.
- **`openqasm`** (`.qasm`) — OpenQASM, open quantum assembly language.
- **`oz`** (`.oz`) — Oz, multi-paradigm language for the Mozart Programming System.
- **`pascal`** (`.pas`, `.p`) — Pascal, structured imperative programming language.
- **`perl`** (`.pl`, `.pm`) — Perl, text-processing scripting language.
- **`php`** (`.php`, `.phtml`) — PHP, server-side web scripting language.
- **`plant-uml`** (`.puml`, `.plantuml`) — PlantUML, text-based UML diagram definition language.
- **`plsql`** (`.plsql`) — PL/SQL, Oracle's procedural extension to SQL.
- **`powerquery`** (`.pq`) — Power Query M, data transformation language for Microsoft tools.
- **`powershell`** (`.ps1`, `.psd1`, `.psm1`) — PowerShell, task automation and configuration management shell.
- **`properties`** (`.properties`) — Java `.properties` configuration files.
- **`protobuf`** (`.proto`) — Protocol Buffers, Google's binary serialization schema language.
- **`pug`** (`.pug`, `.jade`) — Pug (formerly Jade), high-performance HTML template engine.
- **`puppet`** (`.pp`, `.puppet`) — Puppet, infrastructure-as-code configuration DSL.
- **`purescript`** (`.purs`) — PureScript, strongly-typed functional language compiling to JavaScript.
- **`python`** (`.py`, `.pyx`, `.pxd`, `.pxi`) — Python, high-level general-purpose programming language.
- **`q`** (`.q`) — Q/kdb+, vector programming language for time-series databases.
- **`qsharp`** (`.qs`) — Q#, Microsoft's quantum programming language.
- **`r`** (`.r`, `.R`) — R, statistical computing and data visualisation language.
- **`racket`** (`.rkt`) — Racket, Lisp-family language for language-oriented programming.
- **`rescript`** (`.res`) — ReScript, fast typed language compiling to JavaScript.
- **`robotframework`** (`.robot`) — Robot Framework, acceptance testing and RPA framework DSL.
- **`ruby`** (`.rb`) — Ruby, dynamic expressive OOP scripting language.
- **`rust`** (`.rs`) — Rust, systems language focused on memory safety and performance.
- **`sas`** (`.sas`) — SAS, statistical analysis software language.
- **`sass`** (`.sass`) — Sass, CSS extension language (indented syntax).
- **`scala`** (`.scala`) — Scala, OOP and functional language for the JVM.
- **`scheme`** (`.scm`, `.ss`) — Scheme, minimalist Lisp dialect.
- **`scss`** (`.scss`) — SCSS, Sass CSS extension with C-style bracket syntax.
- **`smalltalk`** (`.st`) — Smalltalk, pioneering OOP language and live environment.
- **`smarty`** (`.smarty`, `.tpl`) — Smarty, PHP template engine.
- **`solidity`** (`.sol`) — Solidity, smart contract language for Ethereum and EVM chains.
- **`soy`** (`.soy`) — Google Closure Templates (Soy), type-safe HTML templating.
- **`sparql`** (`.rq`) — SPARQL, RDF graph query language.
- **`sql`** (`.sql`, `.cql`) — SQL, Structured Query Language for relational databases.
- **`stylus`** (`.styl`, `.stylus`) — Stylus, expressive dynamic CSS preprocessor.
- **`swift`** (`.swift`) — Swift, Apple's modern language for iOS and macOS development.
- **`tap`** (`.tap`) — TAP, Test Anything Protocol output format.
- **`tcl`** (`.tcl`) — Tcl, embeddable tool command language.
- **`textile`** (`.textile`) — Textile, lightweight markup language for web content.
- **`toml`** (`.toml`) — TOML, Tom's Obvious Minimal Language configuration format.
- **`tsx`** (`.tsx`) — TSX, TypeScript with embedded JSX syntax for React.
- **`tt2`** (`.tt2`) — Template Toolkit 2, Perl-based templating language.
- **`turtle`** (`.ttl`) — Turtle, Terse RDF Triple Language for semantic web data.
- **`twig`** (`.twig`) — Twig, flexible fast PHP templating engine.
- **`typescript`** (`.ts`, `.mts`, `.cts`) — TypeScript, statically typed superset of JavaScript.
- **`txt`** (`.txt`) — Plain text files.
- **`unrealscript`** (`.uc`) — UnrealScript, scripting language for Unreal Engine 3.
- **`vbnet`** (`.vb`) — Visual Basic .NET, Microsoft's OOP language for .NET.
- **`velocity`** (`.vtl`) — Apache Velocity, Java-based template engine.
- **`verilog`** (`.v`) — Verilog, hardware description language for digital circuits.
- **`vhdl`** (`.vhd`, `.vhdl`) — VHDL, VHSIC Hardware Description Language.
- **`wgsl`** (`.wgsl`) — WGSL, WebGPU Shading Language.
- **`wolfram`** (`.wl`, `.nb`) — Wolfram Language, symbolic language used in Mathematica.
- **`xquery`** (`.xy`, `.xquery`) — XQuery, query and transformation language for XML databases.
- **`yaml`** (`.yaml`, `.yml`) — YAML, human-readable data serialisation format.
- **`zig`** (`.zig`) — Zig, low-level systems programming language with no hidden control flow.

## Registered Formats (No Extension Mapping)

These formats have a working grammar but no built-in file extension mapping. Use `--formats-exts` to associate extensions at run time, or `--formats-names` for extensionless files.

### With Grammar (reprism engine)

- **`abap`** — SAP ABAP, Advanced Business Application Programming language for SAP systems.
  `jscpd --formats-exts "abap:abap" ./src`

- **`apacheconf`** — Apache HTTP Server configuration files.
  `jscpd --formats-exts "apacheconf:conf" ./src`

- **`applescript`** — AppleScript, macOS automation scripting language.
  `jscpd --formats-exts "applescript:applescript,scpt" ./src`

- **`arduino`** — Arduino, C++ dialect for microcontroller sketches.
  `jscpd --formats-exts "arduino:ino" ./src`

- **`arff`** — ARFF, Weka attribute-relation file format for machine learning datasets.
  `jscpd --formats-exts "arff:arff" ./src`

- **`asciidoc`** — AsciiDoc, text document format for technical writing.
  `jscpd --formats-exts "asciidoc:adoc,asciidoc" ./src`

- **`asm6502`** — MOS 6502 assembly language.
  `jscpd --formats-exts "asm6502:s,asm" ./src`

- **`autohotkey`** — AutoHotkey, Windows automation and hotkey scripting language.
  `jscpd --formats-exts "autohotkey:ahk" ./src`

- **`autoit`** — AutoIt, Windows GUI automation scripting language.
  `jscpd --formats-exts "autoit:au3" ./src`

- **`batch`** — Windows batch and cmd scripts.
  `jscpd --formats-exts "batch:bat,cmd" ./src`

- **`bison`** — GNU Bison parser generator grammar files.
  `jscpd --formats-exts "bison:y,yy" ./src`

- **`bro`** — Bro/Zeek, network traffic analysis scripting language.
  `jscpd --formats-exts "bro:bro,zeek" ./src`

- **`csp`** — Content Security Policy header files.
  `jscpd --formats-exts "csp:csp" ./src`

- **`css-extras`** — Extended CSS at-rules and selector patterns.
  `jscpd --formats-exts "css-extras:css" ./src`

- **`django`** — Django/Jinja2, Python web framework HTML template language.
  `jscpd --formats-exts "django:html,djhtml" ./templates`

- **`docker`** — Dockerfile, Docker container image build instructions.
  `jscpd --formats-names "docker:Dockerfile" ./src` or `jscpd --formats-exts "docker:dockerfile" ./src`

- **`elixir`** — Elixir, functional language built on Erlang/BEAM.
  `jscpd --formats-exts "elixir:ex,exs" ./src`

- **`erb`** — ERB, Embedded Ruby HTML templating.
  `jscpd --formats-exts "erb:erb" ./src`

- **`flow`** — Flow, Facebook's static type checker annotations for JavaScript.
  `jscpd --formats-exts "flow:js" ./src`

- **`gedcom`** — GEDCOM, genealogical data interchange format.
  `jscpd --formats-exts "gedcom:ged" ./src`

- **`git`** — Git configuration and commit message files.
  `jscpd --formats-exts "git:gitconfig" ./src`

- **`glsl`** — GLSL, OpenGL Shading Language.
  `jscpd --formats-exts "glsl:glsl,vert,frag" ./src`

- **`http`** — HTTP request and response message format.
  `jscpd --formats-exts "http:http" ./src`

- **`ichigojam`** — IchigoJam BASIC, beginner BASIC for the IchigoJam microcomputer.
  `jscpd --formats-exts "ichigojam:bas" ./src`

- **`icon`** — Icon, high-level general-purpose programming language.
  `jscpd --formats-exts "icon:icn" ./src`

- **`inform7`** — Inform 7, natural language interactive fiction authoring system.
  `jscpd --formats-exts "inform7:ni,i7x" ./src`

- **`io`** — Io, prototype-based OOP language with concurrency primitives.
  `jscpd --formats-exts "io:io" ./src`

- **`j`** — J, high-performance array programming language (successor to APL).
  `jscpd --formats-exts "j:ijs" ./src`

- **`jolie`** — Jolie, service-oriented programming language for microservices.
  `jscpd --formats-exts "jolie:ol,iol" ./src`

- **`liquid`** — Liquid, Shopify's safe customer-facing templating language.
  `jscpd --formats-exts "liquid:liquid" ./src`

- **`lolcode`** — LOLCODE, humorous esoteric programming language.
  `jscpd --formats-exts "lolcode:lol" ./src`

- **`makefile`** — GNU Make build scripts.
  `jscpd --formats-names "makefile:Makefile,GNUmakefile" ./src`

- **`matlab`** — MATLAB, matrix-oriented numerical computing language.
  `jscpd --formats-exts "matlab:m" ./src`

- **`mel`** — MEL, Maya Embedded Language for Autodesk Maya automation.
  `jscpd --formats-exts "mel:mel" ./src`

- **`mizar`** — Mizar, formal mathematics and proof assistant language.
  `jscpd --formats-exts "mizar:miz" ./src`

- **`monkey`** — Monkey, cross-platform game development language.
  `jscpd --formats-exts "monkey:monkey" ./src`

- **`n4js`** — N4JS, typed JavaScript superset by NumberFour.
  `jscpd --formats-exts "n4js:n4js" ./src`

- **`nasm`** — NASM, Netwide Assembler x86 assembly syntax.
  `jscpd --formats-exts "nasm:asm,nasm" ./src`

- **`nginx`** — Nginx web server configuration files.
  `jscpd --formats-exts "nginx:conf,nginx" ./src`

- **`nim`** — Nim, statically-typed compiled systems language.
  `jscpd --formats-exts "nim:nim" ./src`

- **`nix`** — Nix, purely functional package manager configuration language.
  `jscpd --formats-exts "nix:nix" ./src`

- **`opencl`** — OpenCL, open standard for parallel programming across CPUs and GPUs.
  `jscpd --formats-exts "opencl:cl" ./src`

- **`parigp`** — PARI/GP, computer algebra system scripting language.
  `jscpd --formats-exts "parigp:gp" ./src`

- **`processing`** — Processing, visual arts and creative coding language.
  `jscpd --formats-exts "processing:pde" ./src`

- **`prolog`** — Prolog, logic programming language.
  `jscpd --formats-exts "prolog:pl,pro" ./src`

- **`promql`** — PromQL, Prometheus time-series query language.
  `jscpd --formats-exts "promql:promql" ./src`

- **`pure`** — Pure, functional language based on term rewriting.
  `jscpd --formats-exts "pure:pure" ./src`

- **`qore`** — Qore, high-level multi-threaded programming language.
  `jscpd --formats-exts "qore:q,qm" ./src`

- **`reason`** — ReasonML, OCaml-based language with JavaScript-friendly syntax.
  `jscpd --formats-exts "reason:re,rei" ./src`

- **`renpy`** — Ren'Py, visual novel scripting language.
  `jscpd --formats-exts "renpy:rpy" ./src`

- **`rest`** — reStructuredText, documentation markup language used in Sphinx.
  `jscpd --formats-exts "rest:rst" ./src`

- **`rip`** — Rip, object-oriented scripting language.
  `jscpd --formats-exts "rip:rip" ./src`

- **`roboconf`** — Roboconf, graph-based distributed application deployment language.
  `jscpd --formats-exts "roboconf:graph,instances" ./src`

- **`vim`** — VimScript, Vim editor scripting and configuration language.
  `jscpd --formats-exts "vim:vim" ./src`

- **`wasm`** — WebAssembly text format (WAT).
  `jscpd --formats-exts "wasm:wat" ./src`

- **`wiki`** — MediaWiki markup language.
  `jscpd --formats-exts "wiki:wiki" ./src`

- **`xeora`** — Xeora, ASP.NET-style web framework template language.
  `jscpd --formats-exts "xeora:xeora,xchtml" ./src`

- **`xojo`** — Xojo, cross-platform RAD development language.
  `jscpd --formats-exts "xojo:xojo_code,xojo_window" ./src`

### Extension Detection Only (No Grammar)

These formats register file extensions for detection but have no bundled grammar — tokenization returns an empty array. They still benefit from jscpd's blank-line and structural matching.

- **`abnf`** — Augmented Backus-Naur Form grammar notation.
  `jscpd --formats-exts "abnf:abnf" ./src`

- **`agda`** — Agda, dependently-typed functional programming language.
  `jscpd --formats-exts "agda:agda" ./src`

- **`aql`** — AQL, ArangoDB query language.
  `jscpd --formats-exts "aql:aql" ./src`

- **`armasm`** — ARM assembly language.
  `jscpd --formats-exts "armasm:s,asm" ./src`

- **`bnf`** — BNF, Backus-Naur Form grammar notation.
  `jscpd --formats-exts "bnf:bnf" ./src`

- **`cobol`** — COBOL, common business-oriented language.
  `jscpd --formats-exts "cobol:cob,cbl" ./src`

- **`cypher`** — Cypher, graph query language for Neo4j.
  `jscpd --formats-exts "cypher:cypher,cql" ./src`

- **`dhall`** — Dhall, programmable total configuration language.
  `jscpd --formats-exts "dhall:dhall" ./src`

- **`dns-zone-file`** — DNS zone file format.
  `jscpd --formats-exts "dns-zone-file:zone" ./src`

- **`ebnf`** — EBNF, Extended Backus-Naur Form grammar notation.
  `jscpd --formats-exts "ebnf:ebnf" ./src`

- **`editorconfig`** — `.editorconfig`, per-directory editor configuration format.
  `jscpd --formats-exts "editorconfig:editorconfig" ./src`

- **`factor`** — Factor, concatenative stack-based programming language.
  `jscpd --formats-exts "factor:factor" ./src`

- **`ftl`** — FreeMarker Template Language, Java-based template engine.
  `jscpd --formats-exts "ftl:ftl" ./src`

- **`gcode`** — G-code, CNC machine tool programming language.
  `jscpd --formats-exts "gcode:gcode,nc" ./src`

- **`gml`** — GML, GameMaker Language for game logic and events.
  `jscpd --formats-exts "gml:gml" ./src`

- **`go-module`** — Go module files (`go.mod` and `go.sum`).
  `jscpd --formats-names "go-module:go.mod" ./src`

- **`hlsl`** — HLSL, High-Level Shading Language for DirectX.
  `jscpd --formats-exts "hlsl:hlsl,hlsli" ./src`

- **`jq`** — jq, JSON query and transformation language.
  `jscpd --formats-exts "jq:jq" ./src`

- **`kusto`** — KQL/Kusto, Azure Data Explorer and Log Analytics query language.
  `jscpd --formats-exts "kusto:kql" ./src`

- **`mermaid`** — Mermaid, diagram-as-code definition language.
  `jscpd --formats-exts "mermaid:mmd" ./src`

- **`mongodb`** — MongoDB shell and aggregation pipeline query language.
  `jscpd --formats-exts "mongodb:mongo" ./src`

- **`n1ql`** — N1QL, Couchbase's SQL-like query language for JSON documents.
  `jscpd --formats-exts "n1ql:n1ql" ./src`

- **`odin`** — Odin, data-oriented systems programming language.
  `jscpd --formats-exts "odin:odin" ./src`

- **`regex`** — Regular expression patterns.
  `jscpd --formats-exts "regex:regex" ./src`

- **`rego`** — Rego, Open Policy Agent (OPA) policy language.
  `jscpd --formats-exts "rego:rego" ./src`

- **`shell-session`** — Shell session transcripts with prompt markers.
  `jscpd --formats-exts "shell-session:sh-session,console" ./src`

- **`smali`** — Smali, Android Dalvik bytecode assembly language.
  `jscpd --formats-exts "smali:smali" ./src`

- **`stata`** — Stata, statistical analysis and data management language.
  `jscpd --formats-exts "stata:do,ado" ./src`

- **`typoscript`** — TypoScript, TYPO3 CMS configuration and templating language.
  `jscpd --formats-exts "typoscript:typoscript,tsconfig" ./src`

- **`vala`** — Vala, OOP language that compiles to C for GNOME applications.
  `jscpd --formats-exts "vala:vala,vapi" ./src`

## Shebang Detection

jscpd can detect duplications in script files that have no file extension by reading the `#!` shebang line. See [Shebang Detection](#shebang-detection) in the main README for details.

| Interpreter | Detected as |
|-------------|-------------|
| `bash`, `sh`, `zsh`, `fish`, `dash`, `ksh` | `bash` |
| `python`, `python3`, `python2` | `python` |
| `node`, `nodejs` | `javascript` |
| `ruby` | `ruby` |
| `perl` | `perl` |
| `php` | `php` |
| `lua` | `lua` |
| `tclsh`, `wish` | `tcl` |
| `Rscript` | `r` |
| `groovy` | `groovy` |
| `swift` | `swift` |
| `kotlin` | `kotlin` |