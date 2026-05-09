# jscpd Supported Formats

This document lists all language formats recognized by jscpd, their file extensions, and formats planned for future support.

## Supported Formats

These formats are fully supported: jscpd detects them automatically by file extension and tokenizes them with their dedicated grammar.

| Format | Extensions | Description | Example |
|--------|------------|-------------|---------|
| `actionscript` | `.as` | Adobe ActionScript — scripting language for Flash and Flex applications | `jscpd --format actionscript src/` |
| `ada` | `.ada` | Ada — strongly-typed systems and embedded programming language | `jscpd --format ada src/` |
| `antlr4` | `.g4` | ANTLR v4 grammar definition files | `jscpd --format antlr4 src/` |
| `apex` | `.cls` `.trigger` `.apex` | Salesforce Apex — strongly-typed OOP language for the Salesforce platform | `jscpd --format apex src/` |
| `apl` | `.apl` | APL — array-oriented programming language | `jscpd --format apl src/` |
| `aspnet` | `.asp` `.aspx` | ASP.NET — Microsoft server-side web application files | `jscpd --format aspnet src/` |
| `awk` | `.awk` | AWK — text-processing scripting language | `jscpd --format awk src/` |
| `bash` | `.sh` `.ksh` `.bash` | Bash and POSIX shell scripts | `jscpd --format bash src/` |
| `basic` | `.bas` | BASIC — beginner-oriented general-purpose programming language | `jscpd --format basic src/` |
| `bicep` | `.bicep` | Azure Bicep — infrastructure-as-code DSL for Microsoft Azure | `jscpd --format bicep src/` |
| `brainfuck` | `.b` `.bf` | Brainfuck — minimalist esoteric programming language | `jscpd --format brainfuck src/` |
| `c` | `.c` `.z80` | C — general-purpose low-level programming language | `jscpd --format c src/` |
| `c-header` | `.h` | C header files | `jscpd --format c-header src/` |
| `cfml` | `.cfm` | ColdFusion Markup Language — server-side template files | `jscpd --format cfml src/` |
| `cfscript` | `.cfc` | ColdFusion components written in CFScript | `jscpd --format cfscript src/` |
| `clojure` | `.cljs` `.clj` `.cljc` `.cljx` `.edn` | Clojure — functional Lisp dialect for the JVM | `jscpd --format clojure src/` |
| `cmake` | `.cmake` | CMake build system scripts | `jscpd --format cmake src/` |
| `coffeescript` | `.coffee` | CoffeeScript — transpiled language that compiles to JavaScript | `jscpd --format coffeescript src/` |
| `cpp` | `.cpp` `.c++` `.cc` `.cxx` | C++ — systems programming language extending C with OOP | `jscpd --format cpp src/` |
| `cpp-header` | `.hpp` `.h++` `.hh` `.hxx` | C++ header files | `jscpd --format cpp-header src/` |
| `crystal` | `.cr` | Crystal — statically-typed language with Ruby-like syntax | `jscpd --format crystal src/` |
| `csharp` | `.cs` | C# — Microsoft's OOP language for .NET | `jscpd --format csharp src/` |
| `csv` | `.csv` | CSV — comma-separated values data files | `jscpd --format csv src/` |
| `css` | `.css` `.gss` | CSS — Cascading Style Sheets for web styling | `jscpd --format css src/` |
| `d` | `.d` | D — systems language combining C speed with modern safety features | `jscpd --format d src/` |
| `dart` | `.dart` | Dart — Google's client-optimized language used in Flutter | `jscpd --format dart src/` |
| `diff` | `.diff` `.patch` | Unified diff and patch files | `jscpd --format diff src/` |
| `dot` | `.dot` `.gv` | Graphviz DOT language for graph and network diagrams | `jscpd --format dot src/` |
| `eiffel` | `.e` | Eiffel — OOP language with design-by-contract methodology | `jscpd --format eiffel src/` |
| `elm` | `.elm` | Elm — functional language for front-end web development | `jscpd --format elm src/` |
| `erlang` | `.erl` `.erlang` | Erlang — concurrent functional language for distributed systems | `jscpd --format erlang src/` |
| `excel-formula` | `.xlsx` `.xls` | Microsoft Excel spreadsheet files | `jscpd --format excel-formula src/` |
| `fortran` | `.f` `.for` `.f77` `.f90` | Fortran — scientific and numerical computing language | `jscpd --format fortran src/` |
| `fsharp` | `.fs` | F# — functional-first language for .NET | `jscpd --format fsharp src/` |
| `gdscript` | `.gd` | GDScript — scripting language for the Godot game engine | `jscpd --format gdscript src/` |
| `gettext` | `.po` | GNU gettext PO translation/localisation files | `jscpd --format gettext src/` |
| `gherkin` | `.feature` | Gherkin — BDD scenario language used in Cucumber and Behave | `jscpd --format gherkin src/` |
| `go` | `.go` | Go — statically-typed compiled language from Google | `jscpd --format go src/` |
| `graphql` | `.graphql` | GraphQL — query language for APIs | `jscpd --format graphql src/` |
| `groovy` | `.groovy` `.gradle` | Groovy — dynamic JVM language; also covers Gradle build files | `jscpd --format groovy src/` |
| `haml` | `.haml` | Haml — HTML abstraction markup language | `jscpd --format haml src/` |
| `handlebars` | `.hb` `.hbs` `.handlebars` | Handlebars — logicless HTML templating language | `jscpd --format handlebars src/` |
| `haskell` | `.hs` `.lhs` | Haskell — purely functional programming language | `jscpd --format haskell src/` |
| `haxe` | `.hx` `.hxml` | Haxe — cross-platform programming language and toolkit | `jscpd --format haxe src/` |
| `hcl` | `.tf` `.hcl` | HashiCorp Configuration Language — Terraform and Vault config files | `jscpd --format hcl src/` |
| `idris` | `.idr` | Idris — dependently-typed functional programming language | `jscpd --format idris src/` |
| `ignore` | `.gitignore` | Git and tool ignore-pattern files | `jscpd --format ignore src/` |
| `ini` | `.ini` | INI — simple key-value configuration file format | `jscpd --format ini src/` |
| `java` | `.java` | Java — OOP language for the JVM | `jscpd --format java src/` |
| `javascript` | `.js` `.es` `.es6` `.mjs` `.cjs` | JavaScript — scripting language for the web and Node.js | `jscpd --format javascript src/` |
| `json` | `.json` `.map` `.jsonld` | JSON — JavaScript Object Notation data interchange format | `jscpd --format json src/` |
| `json5` | `.json5` | JSON5 — relaxed JSON with comments and trailing commas | `jscpd --format json5 src/` |
| `jsx` | `.jsx` | JSX — JavaScript with embedded XML syntax for React | `jscpd --format jsx src/` |
| `julia` | `.jl` | Julia — high-performance language for scientific computing | `jscpd --format julia src/` |
| `kotlin` | `.kt` `.kts` | Kotlin — modern JVM language fully interoperable with Java | `jscpd --format kotlin src/` |
| `latex` | `.tex` | LaTeX — document preparation and typesetting system | `jscpd --format latex src/` |
| `less` | `.less` | Less — CSS preprocessor with variables, mixins and nesting | `jscpd --format less src/` |
| `lilypond` | `.ly` | LilyPond — text-based music notation language | `jscpd --format lilypond src/` |
| `linker-script` | `.ld` | GNU linker scripts for memory layout control | `jscpd --format linker-script src/` |
| `lisp` | `.cl` `.lisp` `.el` | Common Lisp and Emacs Lisp source files | `jscpd --format lisp src/` |
| `livescript` | `.ls` | LiveScript — functional language that compiles to JavaScript | `jscpd --format livescript src/` |
| `llvm` | `.ll` | LLVM IR — LLVM Intermediate Representation text format | `jscpd --format llvm src/` |
| `log` | `.log` | Log files — structured or unstructured application output | `jscpd --format log src/` |
| `lua` | `.lua` | Lua — lightweight embeddable scripting language | `jscpd --format lua src/` |
| `markdown` | `.md` `.markdown` `.mkd` `.txt` | Markdown — lightweight markup language for documentation | `jscpd --format markdown src/` |
| `markup` | `.html` `.htm` `.xml` `.xsl` `.xslt` `.svg` `.vue` `.ejs` `.jsp` | HTML, XML, SVG, Vue templates and similar markup languages | `jscpd --format markup src/` |
| `nsis` | `.nsh` `.nsi` | NSIS — Nullsoft Scriptable Install System scripts | `jscpd --format nsis src/` |
| `objectivec` | `.m` `.mm` | Objective-C — C-based OOP language for Apple platforms | `jscpd --format objectivec src/` |
| `ocaml` | `.ocaml` `.ml` `.mli` `.mll` `.mly` | OCaml — functional language with strong type inference | `jscpd --format ocaml src/` |
| `openqasm` | `.qasm` | OpenQASM — open quantum assembly language | `jscpd --format openqasm src/` |
| `oz` | `.oz` | Oz — multi-paradigm language for the Mozart Programming System | `jscpd --format oz src/` |
| `pascal` | `.pas` `.p` | Pascal — structured imperative programming language | `jscpd --format pascal src/` |
| `perl` | `.pl` `.pm` | Perl — text-processing scripting language | `jscpd --format perl src/` |
| `php` | `.php` `.phtml` | PHP — server-side web scripting language | `jscpd --format php src/` |
| `plant-uml` | `.puml` `.plantuml` | PlantUML — text-based UML diagram definition language | `jscpd --format plant-uml src/` |
| `plsql` | `.plsql` | PL/SQL — Oracle's procedural extension to SQL | `jscpd --format plsql src/` |
| `powerquery` | `.pq` | Power Query M — data transformation language for Microsoft tools | `jscpd --format powerquery src/` |
| `powershell` | `.ps1` `.psd1` `.psm1` | PowerShell — task automation and configuration management shell | `jscpd --format powershell src/` |
| `properties` | `.properties` | Java `.properties` configuration files | `jscpd --format properties src/` |
| `protobuf` | `.proto` | Protocol Buffers — Google's binary serialization schema language | `jscpd --format protobuf src/` |
| `pug` | `.pug` `.jade` | Pug (formerly Jade) — high-performance HTML template engine | `jscpd --format pug src/` |
| `puppet` | `.pp` `.puppet` | Puppet — infrastructure-as-code configuration DSL | `jscpd --format puppet src/` |
| `purescript` | `.purs` | PureScript — strongly-typed functional language compiling to JavaScript | `jscpd --format purescript src/` |
| `python` | `.py` `.pyx` `.pxd` `.pxi` | Python — high-level general-purpose programming language | `jscpd --format python src/` |
| `q` | `.q` | Q/kdb+ — vector programming language for time-series databases | `jscpd --format q src/` |
| `qsharp` | `.qs` | Q# — Microsoft's quantum programming language | `jscpd --format qsharp src/` |
| `r` | `.r` `.R` | R — statistical computing and data visualisation language | `jscpd --format r src/` |
| `racket` | `.rkt` | Racket — Lisp-family language for language-oriented programming | `jscpd --format racket src/` |
| `rescript` | `.res` | ReScript — fast, typed language compiling to JavaScript | `jscpd --format rescript src/` |
| `robotframework` | `.robot` | Robot Framework — acceptance testing and RPA framework DSL | `jscpd --format robotframework src/` |
| `ruby` | `.rb` | Ruby — dynamic, expressive OOP scripting language | `jscpd --format ruby src/` |
| `rust` | `.rs` | Rust — systems language focused on memory safety and performance | `jscpd --format rust src/` |
| `sas` | `.sas` | SAS — statistical analysis software language | `jscpd --format sas src/` |
| `sass` | `.sass` | Sass — CSS extension language (indented syntax) | `jscpd --format sass src/` |
| `scala` | `.scala` | Scala — OOP and functional language for the JVM | `jscpd --format scala src/` |
| `scheme` | `.scm` `.ss` | Scheme — minimalist Lisp dialect | `jscpd --format scheme src/` |
| `scss` | `.scss` | SCSS — Sass CSS extension with C-style bracket syntax | `jscpd --format scss src/` |
| `smalltalk` | `.st` | Smalltalk — pioneering OOP language and live environment | `jscpd --format smalltalk src/` |
| `smarty` | `.smarty` `.tpl` | Smarty — PHP template engine | `jscpd --format smarty src/` |
| `solidity` | `.sol` | Solidity — smart contract language for Ethereum and EVM chains | `jscpd --format solidity src/` |
| `soy` | `.soy` | Google Closure Templates (Soy) — type-safe HTML templating | `jscpd --format soy src/` |
| `sparql` | `.rq` | SPARQL — RDF graph query language | `jscpd --format sparql src/` |
| `sql` | `.sql` `.cql` | SQL — Structured Query Language for relational databases | `jscpd --format sql src/` |
| `stylus` | `.styl` `.stylus` | Stylus — expressive, dynamic CSS preprocessor | `jscpd --format stylus src/` |
| `swift` | `.swift` | Swift — Apple's modern language for iOS and macOS development | `jscpd --format swift src/` |
| `tap` | `.tap` | TAP — Test Anything Protocol output format | `jscpd --format tap src/` |
| `tcl` | `.tcl` | Tcl — embeddable tool command language | `jscpd --format tcl src/` |
| `textile` | `.textile` | Textile — lightweight markup language for web content | `jscpd --format textile src/` |
| `toml` | `.toml` | TOML — Tom's Obvious Minimal Language configuration format | `jscpd --format toml src/` |
| `tsx` | `.tsx` | TSX — TypeScript with embedded JSX syntax for React | `jscpd --format tsx src/` |
| `tt2` | `.tt2` | Template Toolkit 2 — Perl-based templating language | `jscpd --format tt2 src/` |
| `turtle` | `.ttl` | Turtle — Terse RDF Triple Language for semantic web data | `jscpd --format turtle src/` |
| `twig` | `.twig` | Twig — flexible, fast PHP templating engine | `jscpd --format twig src/` |
| `typescript` | `.ts` `.mts` `.cts` | TypeScript — statically typed superset of JavaScript | `jscpd --format typescript src/` |
| `unrealscript` | `.uc` | UnrealScript — scripting language for Unreal Engine 3 | `jscpd --format unrealscript src/` |
| `vbnet` | `.vb` | Visual Basic .NET — Microsoft's OOP language for .NET | `jscpd --format vbnet src/` |
| `velocity` | `.vtl` | Apache Velocity — Java-based template engine | `jscpd --format velocity src/` |
| `verilog` | `.v` | Verilog — hardware description language for digital circuits | `jscpd --format verilog src/` |
| `vhdl` | `.vhd` `.vhdl` | VHDL — VHSIC Hardware Description Language | `jscpd --format vhdl src/` |
| `wgsl` | `.wgsl` | WGSL — WebGPU Shading Language | `jscpd --format wgsl src/` |
| `wolfram` | `.wl` `.nb` | Wolfram Language — symbolic language used in Mathematica | `jscpd --format wolfram src/` |
| `xquery` | `.xy` `.xquery` | XQuery — query and transformation language for XML databases | `jscpd --format xquery src/` |
| `yaml` | `.yaml` `.yml` | YAML — human-readable data serialisation format | `jscpd --format yaml src/` |
| `zig` | `.zig` | Zig — low-level systems programming language with no hidden control flow | `jscpd --format zig src/` |

## Registered Formats (No Extension Mapping)

These formats have a working grammar but no file extension mapping. jscpd will not auto-detect them by file extension — pass `--format <name>` together with `--pattern` to target the right files explicitly.

| Format | Description | Example |
|--------|-------------|---------|
| `abap` | SAP ABAP — Advanced Business Application Programming language for SAP systems | `jscpd --format abap --pattern "**/*.abap" src/` |
| `apacheconf` | Apache HTTP Server configuration files | `jscpd --format apacheconf --pattern "**/httpd.conf" .` |
| `applescript` | AppleScript — macOS automation scripting language | `jscpd --format applescript --pattern "**/*.applescript" src/` |
| `arduino` | Arduino — C++ dialect for Arduino microcontroller sketches | `jscpd --format arduino --pattern "**/*.ino" src/` |
| `arff` | ARFF — Weka attribute-relation file format for machine learning datasets | `jscpd --format arff --pattern "**/*.arff" src/` |
| `asciidoc` | AsciiDoc — text document format for technical writing | `jscpd --format asciidoc --pattern "**/*.adoc" src/` |
| `asm6502` | MOS 6502 assembly language | `jscpd --format asm6502 --pattern "**/*.s" src/` |
| `autohotkey` | AutoHotkey — Windows automation and hotkey scripting language | `jscpd --format autohotkey --pattern "**/*.ahk" src/` |
| `autoit` | AutoIt — Windows GUI automation scripting language | `jscpd --format autoit --pattern "**/*.au3" src/` |
| `batch` | Windows batch/cmd scripts | `jscpd --format batch --pattern "**/*.bat" src/` |
| `bison` | GNU Bison parser generator grammar files | `jscpd --format bison --pattern "**/*.y" src/` |
| `bnf` | BNF — Backus-Naur Form grammar notation | `jscpd --format bnf --pattern "**/*.bnf" src/` |
| `bro` | Bro/Zeek — network traffic analysis scripting language | `jscpd --format bro --pattern "**/*.bro" src/` |
| `clike` | Generic C-like base grammar (internal — prefer a specific language) | `jscpd --format clike --pattern "**/*.c" src/` |
| `csp` | Content Security Policy header files | `jscpd --format csp --pattern "**/*.csp" src/` |
| `css-extras` | Extended CSS at-rules and selector patterns | `jscpd --format css-extras --pattern "**/*.css" src/` |
| `cypher` | Cypher — graph query language for Neo4j | `jscpd --format cypher --pattern "**/*.cypher" src/` |
| `dhall` | Dhall — programmable, total configuration language | `jscpd --format dhall --pattern "**/*.dhall" src/` |
| `django` | Django/Jinja2 — Python web framework HTML template language | `jscpd --format django --pattern "**/*.html" templates/` |
| `dns-zone-file` | DNS zone file format | `jscpd --format dns-zone-file --pattern "**/*.zone" src/` |
| `docker` | Dockerfile — Docker container image build instructions | `jscpd --format docker --pattern "**/Dockerfile*" .` |
| `ebnf` | EBNF — Extended Backus-Naur Form grammar notation | `jscpd --format ebnf --pattern "**/*.ebnf" src/` |
| `editorconfig` | .editorconfig — per-directory editor configuration format | `jscpd --format editorconfig --pattern "**/.editorconfig" .` |
| `elixir` | Elixir — functional language built on Erlang/BEAM | `jscpd --format elixir --pattern "**/*.ex" src/` |
| `erb` | ERB — Embedded Ruby HTML templating | `jscpd --format erb --pattern "**/*.erb" src/` |
| `factor` | Factor — concatenative, stack-based programming language | `jscpd --format factor --pattern "**/*.factor" src/` |
| `flow` | Flow — Facebook's static type checker annotations for JavaScript | `jscpd --format flow --pattern "**/*.js" src/` |
| `ftl` | FreeMarker Template Language — Java-based template engine | `jscpd --format ftl --pattern "**/*.ftl" src/` |
| `gcode` | G-code — CNC machine tool programming language | `jscpd --format gcode --pattern "**/*.gcode" src/` |
| `gedcom` | GEDCOM — genealogical data interchange format | `jscpd --format gedcom --pattern "**/*.ged" src/` |
| `git` | Git configuration and commit message files | `jscpd --format git --pattern "**/*.gitconfig" .` |
| `glsl` | GLSL — OpenGL Shading Language | `jscpd --format glsl --pattern "**/*.glsl" src/` |
| `gml` | GML — GameMaker Language for game logic and events | `jscpd --format gml --pattern "**/*.gml" src/` |
| `go-module` | Go module files (go.mod and go.sum) | `jscpd --format go-module --pattern "**/go.mod" .` |
| `hlsl` | HLSL — High-Level Shading Language for DirectX | `jscpd --format hlsl --pattern "**/*.hlsl" src/` |
| `http` | HTTP request and response message format | `jscpd --format http --pattern "**/*.http" src/` |
| `ichigojam` | IchigoJam BASIC — beginner BASIC for the IchigoJam microcomputer | `jscpd --format ichigojam --pattern "**/*.bas" src/` |
| `icon` | Icon — high-level general-purpose programming language | `jscpd --format icon --pattern "**/*.icn" src/` |
| `inform7` | Inform 7 — natural language interactive fiction authoring system | `jscpd --format inform7 --pattern "**/*.ni" src/` |
| `io` | Io — prototype-based OOP language with concurrency primitives | `jscpd --format io --pattern "**/*.io" src/` |
| `j` | J — high-performance array programming language (successor to APL) | `jscpd --format j --pattern "**/*.ijs" src/` |
| `jolie` | Jolie — service-oriented programming language for microservices | `jscpd --format jolie --pattern "**/*.ol" src/` |
| `jq` | jq — JSON query and transformation language | `jscpd --format jq --pattern "**/*.jq" src/` |
| `kusto` | KQL/Kusto — Azure Data Explorer and Log Analytics query language | `jscpd --format kusto --pattern "**/*.kql" src/` |
| `liquid` | Liquid — Shopify's safe, customer-facing templating language | `jscpd --format liquid --pattern "**/*.liquid" src/` |
| `lolcode` | LOLCODE — humorous esoteric programming language | `jscpd --format lolcode --pattern "**/*.lol" src/` |
| `makefile` | GNU Make build scripts | `jscpd --format makefile --pattern "**/Makefile" .` |
| `matlab` | MATLAB — matrix-oriented numerical computing language | `jscpd --format matlab --pattern "**/*.m" src/` |
| `mel` | MEL — Maya Embedded Language for Autodesk Maya automation | `jscpd --format mel --pattern "**/*.mel" src/` |
| `mermaid` | Mermaid — diagram-as-code definition language | `jscpd --format mermaid --pattern "**/*.mmd" src/` |
| `mizar` | Mizar — formal mathematics and proof assistant language | `jscpd --format mizar --pattern "**/*.miz" src/` |
| `mongodb` | MongoDB shell and aggregation pipeline query language | `jscpd --format mongodb --pattern "**/*.mongo" src/` |
| `monkey` | Monkey — cross-platform game development language | `jscpd --format monkey --pattern "**/*.monkey" src/` |
| `n1ql` | N1QL — Couchbase's SQL-like query language for JSON | `jscpd --format n1ql --pattern "**/*.n1ql" src/` |
| `n4js` | N4JS — typed JavaScript superset by NumberFour | `jscpd --format n4js --pattern "**/*.n4js" src/` |
| `nasm` | NASM — Netwide Assembler x86 assembly syntax | `jscpd --format nasm --pattern "**/*.asm" src/` |
| `nginx` | Nginx web server configuration files | `jscpd --format nginx --pattern "**/nginx.conf" .` |
| `nim` | Nim — statically-typed compiled systems language | `jscpd --format nim --pattern "**/*.nim" src/` |
| `nix` | Nix — purely functional package manager configuration language | `jscpd --format nix --pattern "**/*.nix" src/` |
| `odin` | Odin — data-oriented systems programming language | `jscpd --format odin --pattern "**/*.odin" src/` |
| `opencl` | OpenCL — open standard for parallel programming across CPUs and GPUs | `jscpd --format opencl --pattern "**/*.cl" src/` |
| `parigp` | PARI/GP — computer algebra system scripting language | `jscpd --format parigp --pattern "**/*.gp" src/` |
| `processing` | Processing — visual arts and creative coding language | `jscpd --format processing --pattern "**/*.pde" src/` |
| `prolog` | Prolog — logic programming language | `jscpd --format prolog --pattern "**/*.pl" src/` |
| `promql` | PromQL — Prometheus time-series query language | `jscpd --format promql --pattern "**/*.promql" src/` |
| `pure` | Pure — functional language based on term rewriting | `jscpd --format pure --pattern "**/*.pure" src/` |
| `qore` | Qore — high-level multi-threaded programming language | `jscpd --format qore --pattern "**/*.q" src/` |
| `reason` | ReasonML — OCaml-based language with JavaScript-friendly syntax | `jscpd --format reason --pattern "**/*.re" src/` |
| `regex` | Regular expression patterns | `jscpd --format regex --pattern "**/*.regex" src/` |
| `rego` | Rego — Open Policy Agent (OPA) policy language | `jscpd --format rego --pattern "**/*.rego" src/` |
| `renpy` | Ren'Py — visual novel scripting language | `jscpd --format renpy --pattern "**/*.rpy" src/` |
| `rest` | reStructuredText — documentation markup language used in Sphinx | `jscpd --format rest --pattern "**/*.rst" src/` |
| `rip` | Rip — object-oriented scripting language | `jscpd --format rip --pattern "**/*.rip" src/` |
| `roboconf` | Roboconf — graph-based distributed application deployment language | `jscpd --format roboconf --pattern "**/*.graph" src/` |
| `shell-session` | Shell session transcripts with prompt markers | `jscpd --format shell-session --pattern "**/*.sh-session" src/` |
| `smali` | Smali — Android Dalvik bytecode assembly language | `jscpd --format smali --pattern "**/*.smali" src/` |
| `stata` | Stata — statistical analysis and data management language | `jscpd --format stata --pattern "**/*.do" src/` |
| `typoscript` | TypoScript — TYPO3 CMS configuration and templating language | `jscpd --format typoscript --pattern "**/*.typoscript" src/` |
| `vala` | Vala — OOP language that compiles to C for GNOME applications | `jscpd --format vala --pattern "**/*.vala" src/` |
| `vim` | VimScript — Vim editor scripting and configuration language | `jscpd --format vim --pattern "**/*.vim" src/` |
| `wasm` | WebAssembly text format (WAT) | `jscpd --format wasm --pattern "**/*.wat" src/` |
| `wiki` | MediaWiki markup language | `jscpd --format wiki --pattern "**/*.wiki" src/` |
| `xeora` | Xeora — ASP.NET-style web framework template language | `jscpd --format xeora --pattern "**/*.xeora" src/` |
| `xojo` | Xojo — cross-platform RAD development language | `jscpd --format xojo --pattern "**/*.xojo_code" src/` |

## Planned Formats

| Format | Issue | Description | Status | Blocker |
|--------|-------|-------------|--------|---------|
| `astro` | [#618](https://github.com/kucherenko/jscpd/issues/618) | Astro — modern static-site builder component format (`.astro` files mixing HTML, JS, and CSS) | Blocked | No standalone Prism grammar exists; upstream PrismJS PR [#3679](https://github.com/PrismJS/prism/pull/3679) is unmerged |
