import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as Toc } from "../../../chunks/Toc.js";
const Changelog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 data-svelte-h="svelte-riatt8">Changelog</h3> <p data-svelte-h="svelte-12vgnr8">All notable changes to this project will be documented in this file. Dates are displayed in UTC.</p> <h4 data-svelte-h="svelte-1hca4mk"><a href="https://github.com/janosh/elementari/compare/v0.2.0...v0.2.3" rel="nofollow">v0.2.3</a></h4> <blockquote data-svelte-h="svelte-1uhra37"><p>15 January 2024</p></blockquote> <ul data-svelte-h="svelte-1diq19c"><li>Add props and control sliders for ambient and directional lighting to <code>Structure</code> <a href="https://github.com/janosh/elementari/pull/45" rel="nofollow"><code>#45</code></a></li> <li>Add <code>SymmetryCard.svelte</code> <a href="https://github.com/janosh/elementari/pull/42" rel="nofollow"><code>#42</code></a></li> <li>add /molecule demo page with initial examples water, methane, benzene <a href="https://github.com/janosh/elementari/commit/71ce70b338d0cb80c2b7468fc98f2f5c7f480c61" rel="nofollow"><code>71ce70b</code></a></li> <li>fix find_image_atoms() for non-cuboid lattices <a href="https://github.com/janosh/elementari/commit/91385820a69f5873815e4a321b37a7a9af33be18" rel="nofollow"><code>9138582</code></a></li> <li>add lib/structure/bonding.ts with max_dist and nearest_neighbor bonding strategies <a href="https://github.com/janosh/elementari/commit/f707cf28340541ad4f9c52ae4ba216f7b0eacf61" rel="nofollow"><code>f707cf2</code></a></li> <li>add lib/math.ts <a href="https://github.com/janosh/elementari/commit/58cf060e5158793d53d52776d444b7357ccc4c71" rel="nofollow"><code>58cf060</code></a></li> <li>Structure add fullscreen button + improve default initial camera_position <a href="https://github.com/janosh/elementari/commit/bda2e5fb7d0fdd12cdb902fdf7a89d61ef4d958d" rel="nofollow"><code>bda2e5f</code></a></li> <li>fix black text color on transparent ElementTiles <a href="https://github.com/janosh/elementari/commit/3ace071110cf100a65116d60d8dd511d340fe5a0" rel="nofollow"><code>3ace071</code></a></li> <li>add src/emmet_pydantic_to_ts.py to auto-convert emmet pydantic models to typescript types <a href="https://github.com/janosh/elementari/commit/e4bcc92ab78565693b19e444c51f53a968b13744" rel="nofollow"><code>e4bcc92</code></a></li> <li>add /api page to inspect AWS Open Data schema <a href="https://github.com/janosh/elementari/commit/83bc866fcb4f241401f126328313343d8fa1819b" rel="nofollow"><code>83bc866</code></a></li> <li>add similar structures and robocrys sections to mp-[slug] page <a href="https://github.com/janosh/elementari/commit/d4dce4b9704318428a9962f5b7e8315ea7f6851e" rel="nofollow"><code>d4dce4b</code></a></li> <li>extract (demos)/periodic-table/+page.svelte from landing page, change landing +page.svelte to +page.md <a href="https://github.com/janosh/elementari/commit/cd32144874e1eb2398dc30fc1977bf7eeaaf7cfb" rel="nofollow"><code>cd32144</code></a></li> <li>fix duplicate bonds in max_dist and nearest_neighbor functions <a href="https://github.com/janosh/elementari/commit/14027e36af155b40f332f5768c7162ec919b0809" rel="nofollow"><code>14027e3</code></a></li> <li>StructureScene add prop fov: number | undefined = undefined <a href="https://github.com/janosh/elementari/commit/770ffbf36e8e1aa9d68bfe2cb4f7656d11ec7fbf" rel="nofollow"><code>770ffbf</code></a></li> <li>rename prop site_labels -&gt; show_site_labels, default to true + fix site site_labels rendering <a href="https://github.com/janosh/elementari/commit/ff0336a8a8236e166b5f64dddfc7cdc59331d1f0" rel="nofollow"><code>ff0336a</code></a></li> <li>add largest MP structure mp-1204603 to demo <a href="https://github.com/janosh/elementari/commit/1b0bc6d96c0d450f696665d2f3733048d9bda2b5" rel="nofollow"><code>1b0bc6d</code></a></li> <li>bump threlte to v6 official release <a href="https://github.com/janosh/elementari/commit/45e3dc2c0a28ffd3d076c3ada986c2c639215757" rel="nofollow"><code>45e3dc2</code></a></li> <li>periodic-table.test.ts don’t iterate over full table, do random subset for speed <a href="https://github.com/janosh/elementari/commit/be68b6ab27b8d3ab527042859f62f8056bdd94e4" rel="nofollow"><code>be68b6a</code></a></li> <li>fetch_zipped() only console.error, not raise if !response.ok <a href="https://github.com/janosh/elementari/commit/f46cee00e1383c7509334638e4141d7a71955d59" rel="nofollow"><code>f46cee0</code></a></li></ul> <h4 data-svelte-h="svelte-mkn7l5"><a href="https://github.com/janosh/elementari/compare/v0.1.8...v0.2.0" rel="nofollow">v0.2.0</a></h4> <blockquote data-svelte-h="svelte-1upozsa"><p>8 July 2023</p></blockquote> <ul data-svelte-h="svelte-1b6lbmi"><li>Add <code>Lattice.svelte</code> <a href="https://github.com/janosh/elementari/pull/41" rel="nofollow"><code>#41</code></a></li> <li>Show cylinder between active and hovered sites <a href="https://github.com/janosh/elementari/pull/40" rel="nofollow"><code>#40</code></a></li> <li>Fix structure controls for <code>atom_radius</code>, <code>same_size_atoms</code> <a href="https://github.com/janosh/elementari/pull/38" rel="nofollow"><code>#38</code></a></li> <li>Add <code>Bond</code> component <a href="https://github.com/janosh/elementari/pull/37" rel="nofollow"><code>#37</code></a></li> <li>Split <code>/src/lib</code> into submodules <a href="https://github.com/janosh/elementari/pull/36" rel="nofollow"><code>#36</code></a></li> <li>Add materials detail pages <a href="https://github.com/janosh/elementari/pull/35" rel="nofollow"><code>#35</code></a></li> <li>Highlight active and hovered sites in <code>Structure</code> <a href="https://github.com/janosh/elementari/pull/34" rel="nofollow"><code>#34</code></a></li> <li>Structure tooltips when hovering atoms <a href="https://github.com/janosh/elementari/pull/33" rel="nofollow"><code>#33</code></a></li> <li>get started with testing Structure.svelte and structure.ts <a href="https://github.com/janosh/elementari/pull/32" rel="nofollow"><code>#32</code></a></li> <li>Structure hide buttons on desktop until hover <a href="https://github.com/janosh/elementari/pull/31" rel="nofollow"><code>#31</code></a></li> <li>Structure grid example <a href="https://github.com/janosh/elementari/pull/30" rel="nofollow"><code>#30</code></a></li> <li><code>Structure</code> allow selecting from different element color schemes + override individual elements <a href="https://github.com/janosh/elementari/pull/29" rel="nofollow"><code>#29</code></a></li> <li>add function find_image_atoms() used in StructureScene to draw images of atoms <a href="https://github.com/janosh/elementari/commit/3098d6c7a78eca7d47bda0a7b5da219c575883ff" rel="nofollow"><code>3098d6c</code></a></li> <li>Structure add prop show_image_atoms, expand MaterialCard to show more attrs, mp-[slug] pages sync material ID with url <a href="https://github.com/janosh/elementari/commit/f43dd31960aed20ca454ab9adf70094a57ce7b5c" rel="nofollow"><code>f43dd31</code></a></li> <li>add Structure control bond_color + make all Structure CSS into variables <a href="https://github.com/janosh/elementari/commit/a79ff0093b88b2ad1dd525f8ddd67a3d9278b315" rel="nofollow"><code>a79ff00</code></a></li> <li>make initial camera_position responsive to crystal size <a href="https://github.com/janosh/elementari/commit/5b1e82abf0e4cc63832ee36e64d17b8344954d03" rel="nofollow"><code>5b1e82a</code></a></li> <li>use InstancedMesh from @threlte/extras for more efficient drawing of crystal sites <a href="https://github.com/janosh/elementari/commit/142effb75f565ce9f0dbedf05bf062112744bb68" rel="nofollow"><code>142effb</code></a></li> <li>add API explorer page (under /api) <a href="https://github.com/janosh/elementari/commit/2a7c60e4feed54f068cdfb787db43990f4772fe6" rel="nofollow"><code>2a7c60e</code></a></li> <li>display distance between active and hovered site in hover tooltip <a href="https://github.com/janosh/elementari/commit/9e1af461802a49c844d20ddbc6176abb48784b59" rel="nofollow"><code>9e1af46</code></a></li> <li>add props <a href="https://github.com/janosh/elementari/commit/c586225b99e5777ef8ec14cfdaa2538f3bbd3a22" rel="nofollow"><code>c586225</code></a></li> <li>drop valid Pymatgen structures as JSON files on Structure.svelte to display them <a href="https://github.com/janosh/elementari/commit/7127b18312a5deea4c266d42168dd0e623a0ff29" rel="nofollow"><code>7127b18</code></a></li> <li>PeriodicTable add prop color_overrides <a href="https://github.com/janosh/elementari/commit/1042bf2b49bd79e7932af37362e2f5884a3e3c92" rel="nofollow"><code>1042bf2</code></a></li> <li>add copy buttons to all code blocks <a href="https://github.com/janosh/elementari/commit/7f3fb5c8d043309d097a400af7e267436e819880" rel="nofollow"><code>7f3fb5c</code></a></li> <li>fix landing page layout broken in last commit <a href="https://github.com/janosh/elementari/commit/6f675dd6e5bca4cc244c08963786ee40485abb57" rel="nofollow"><code>6f675dd</code></a></li></ul> <h4 data-svelte-h="svelte-m0ovvf"><a href="https://github.com/janosh/elementari/compare/v0.1.6...v0.1.7" rel="nofollow">v0.1.7</a></h4> <blockquote data-svelte-h="svelte-u9ywxq"><p>3 May 2023</p></blockquote> <ul data-svelte-h="svelte-2we2dr"><li>Initial support for rendering interactive 3d structures <a href="https://github.com/janosh/elementari/pull/28" rel="nofollow"><code>#28</code></a></li> <li>Rename ColorBar props <a href="https://github.com/janosh/elementari/pull/27" rel="nofollow"><code>#27</code></a></li> <li>handle structure=undefined in Structure and StructureCard component <a href="https://github.com/janosh/elementari/commit/3aa160b84371a72413bf5d8484c787c362d428dc" rel="nofollow"><code>3aa160b</code></a></li> <li>add Structure props zoom_speed, pan_speed <a href="https://github.com/janosh/elementari/commit/b2484eda368714f7a5ffb84d3e54002db423bdc1" rel="nofollow"><code>b2484ed</code></a></li> <li>add option to show cell as surface, wireframe or not at all, add range slider for cell opacity <a href="https://github.com/janosh/elementari/commit/072d57ab91b495eb8b68d1f1b04efa3468284dc8" rel="nofollow"><code>072d57a</code></a></li> <li>add Structure props show_vectors, vector_colors, vector_origin <a href="https://github.com/janosh/elementari/commit/a3f44687fe44b5fa518d6d37a2d1dc2e9eb2468a" rel="nofollow"><code>a3f4468</code></a></li> <li>fix ElementTile dispatch event payload name dom_event <a href="https://github.com/janosh/elementari/commit/f557b07c8c383908d49adc63c005c5cb469e35ec" rel="nofollow"><code>f557b07</code></a></li> <li>Structure add bindable props width, height <a href="https://github.com/janosh/elementari/commit/3921f9d067a9e1a840b6dcbca53c27d67b4c7434" rel="nofollow"><code>3921f9d</code></a></li> <li>rename Structure-&gt;PymatgenStructure <a href="https://github.com/janosh/elementari/commit/20096707f131d46a25a30f662c852f9a942479b3" rel="nofollow"><code>2009670</code></a></li></ul> <h4 data-svelte-h="svelte-1f1jca9"><a href="https://github.com/janosh/elementari/compare/v0.1.4...v0.1.6" rel="nofollow">v0.1.6</a></h4> <blockquote data-svelte-h="svelte-2xth0y"><p>8 April 2023</p></blockquote> <ul data-svelte-h="svelte-1wmg0cn"><li>DRY workflows and ColorBar snap tick labels to nice values <a href="https://github.com/janosh/elementari/pull/22" rel="nofollow"><code>#22</code></a></li> <li>Add unit tests for <code>ColorBar.svelte</code> <a href="https://github.com/janosh/elementari/pull/21" rel="nofollow"><code>#21</code></a></li> <li>add prop precision: number = 2 to ElementTile <a href="https://github.com/janosh/elementari/commit/9847290ac1344efd30a8a987bf8934e77b7c02a8" rel="nofollow"><code>9847290</code></a></li> <li>add ElementStats.test.ts <a href="https://github.com/janosh/elementari/commit/ccc98bf5d54b80946c429f704c076857b3fff477" rel="nofollow"><code>ccc98bf</code></a></li> <li>add precision prop to ColorBar <a href="https://github.com/janosh/elementari/commit/b9bc39247dbb4522704e0f9a000a709a59f141a5" rel="nofollow"><code>b9bc392</code></a></li></ul> <h4 data-svelte-h="svelte-1yo7h9e"><a href="https://github.com/janosh/elementari/compare/v0.1.1...v0.1.4" rel="nofollow">v0.1.4</a></h4> <blockquote data-svelte-h="svelte-11sbh3x"><p>19 March 2023</p></blockquote> <ul data-svelte-h="svelte-i7l64z"><li>Add prop color_scale_range to PeriodicTable <a href="https://github.com/janosh/elementari/pull/20" rel="nofollow"><code>#20</code></a></li> <li>Add tick labels to ColorBar <a href="https://github.com/janosh/elementari/pull/19" rel="nofollow"><code>#19</code></a></li> <li>add test ‘element tiles are accessible to keyboard users’ <a href="https://github.com/janosh/elementari/commit/314876a3dfe3c4ccc3a245c88607169b7a18c7dd" rel="nofollow"><code>314876a</code></a></li> <li>add prop text_color to ElementTile <a href="https://github.com/janosh/elementari/commit/79b1eb4e1e856336b891d31950fda3b4ac66e528" rel="nofollow"><code>79b1eb4</code></a></li> <li>fix error msg on bad color scale names <a href="https://github.com/janosh/elementari/commit/c1d0f2ac61878d35e7a16754632dc279348f68e7" rel="nofollow"><code>c1d0f2a</code></a></li></ul> <blockquote data-svelte-h="svelte-1a0qrh5"><p>v0.1.2 and v0.1.3 were faulty and have been unpublished.</p></blockquote> <h4 data-svelte-h="svelte-2lec5x"><a href="https://github.com/janosh/elementari/compare/v0.1.0...v0.1.1" rel="nofollow">v0.1.1</a></h4> <blockquote data-svelte-h="svelte-1hm9aps"><p>16 March 2023</p></blockquote> <ul data-svelte-h="svelte-ak7eml"><li>AVIF element images <a href="https://github.com/janosh/elementari/pull/18" rel="nofollow"><code>#18</code></a></li> <li>add src/lib/ColorBar.svelte <a href="https://github.com/janosh/elementari/commit/1bff50c440466be02d7e47581c1b3e3ad817cb16" rel="nofollow"><code>1bff50c</code></a></li> <li>record element image provider to static/img-sources.json in src/fetch-elem-images.ts <a href="https://github.com/janosh/elementari/commit/c3a5a91aa35144400ef127d01bbb2a2e87669a7c" rel="nofollow"><code>c3a5a91</code></a></li> <li>replace PrevNextElement.svelte with PrevNext from svelte-zoo <a href="https://github.com/janosh/elementari/commit/4773c2465c18b00fca9be1d2a608a0faf80d6147" rel="nofollow"><code>4773c24</code></a></li> <li>show tiles of reduced opacity representing all lanth-/actinides in grid col=3, row=6/7 <a href="https://github.com/janosh/elementari/commit/be4f88a5932c1f4eb8de25adb2d4918bd52ad78d" rel="nofollow"><code>be4f88a</code></a></li> <li>fix DemoNav active route <a href="https://github.com/janosh/elementari/commit/887e8ce4a81e43566d42303f38b933d86e4f968d" rel="nofollow"><code>887e8ce</code></a></li> <li>update svelte-package to v2 <a href="https://github.com/janosh/elementari/commit/0e61a9dce4332adb215df2b191b101f1b6f74135" rel="nofollow"><code>0e61a9d</code></a></li> <li>add CmdPalette for keyboard-only site navigation <a href="https://github.com/janosh/elementari/commit/8a82f55a6b05d31d831e0c3c5c49a6d7d7eb4d8c" rel="nofollow"><code>8a82f55</code></a></li></ul> <h4 data-svelte-h="svelte-1fkqyyn">v0.1.0</h4> <blockquote data-svelte-h="svelte-1wt00s5"><p>14 February 2023</p></blockquote> <ul data-svelte-h="svelte-qhwsaq"><li>prepare NPM Release <a href="https://github.com/janosh/elementari/pull/16" rel="nofollow"><code>#16</code></a></li> <li>Deploy site to GitHub Pages <a href="https://github.com/janosh/elementari/pull/15" rel="nofollow"><code>#15</code></a></li> <li>add test ‘hooking PeriodicTable up to PropertySelect and selecting heatmap sets element tile background’ <a href="https://github.com/janosh/elementari/pull/14" rel="nofollow"><code>#14</code></a></li> <li>convert <code>src/lib/element-data.{ts -&gt; yml}</code> <a href="https://github.com/janosh/elementari/pull/13" rel="nofollow"><code>#13</code></a></li> <li>Migrate to PNPM <a href="https://github.com/janosh/elementari/pull/12" rel="nofollow"><code>#12</code></a></li> <li>Update scatter tooltip when hovering element tiles <a href="https://github.com/janosh/elementari/pull/9" rel="nofollow"><code>#9</code></a></li> <li>SvelteKit auto migration <a href="https://github.com/janosh/elementari/pull/8" rel="nofollow"><code>#8</code></a></li> <li>[pre-commit.ci] pre-commit autoupdate <a href="https://github.com/janosh/elementari/pull/5" rel="nofollow"><code>#5</code></a></li> <li>Add fill area below elemental periodicity line plot <a href="https://github.com/janosh/elementari/pull/4" rel="nofollow"><code>#4</code></a></li> <li>add individual element detail pages (closes #1) <a href="https://github.com/janosh/elementari/issues/1" rel="nofollow"><code>#1</code></a></li> <li>split ActiveElement.svelte into TableInset + ElementStats + ElementPhoto (closes #2, closes #3) <a href="https://github.com/janosh/elementari/issues/2" rel="nofollow"><code>#2</code></a> <a href="https://github.com/janosh/elementari/issues/3" rel="nofollow"><code>#3</code></a></li> <li>revert #13 <code>src/lib/element-data.{yml -&gt; ts}</code> <a href="https://github.com/janosh/elementari/commit/b1818397184d72e8ee229165fba38a2cebc0ee59" rel="nofollow"><code>b181839</code></a></li> <li>initial commit <a href="https://github.com/janosh/elementari/commit/feeae8f84678316b408a1bf4f3bfc269901a73b9" rel="nofollow"><code>feeae8f</code></a></li> <li>add src/lib/Nucleus.svelte along with demo src/routes/(demos)/nucleus/+page.svx <a href="https://github.com/janosh/elementari/commit/b148e54609da3e744da8f6a70c45783f85039fc5" rel="nofollow"><code>b148e54</code></a></li> <li>spice up ElementStats and element detail pages with iconify icons <a href="https://github.com/janosh/elementari/commit/4eace919af8b49ec44b261892a3df5cc6cf3db2b" rel="nofollow"><code>4eace91</code></a></li> <li>add color-scale + element-tile demo page <a href="https://github.com/janosh/elementari/commit/664e8f5a89a353fa4c72fd8b16d9e091a63cbd56" rel="nofollow"><code>664e8f5</code></a></li> <li>add ability to plot predefined heat maps <a href="https://github.com/janosh/elementari/commit/71459fab6283acda6d11a552896d252aa4683fb0" rel="nofollow"><code>71459fa</code></a></li> <li>rename package and repo to elementari <a href="https://github.com/janosh/elementari/commit/1921efe5f02c5eadcf0e62cecafd657f0b0b99b4" rel="nofollow"><code>1921efe</code></a></li> <li>split ScatterPlot into data-agnostic ScatterPlot and ElementScatter <a href="https://github.com/janosh/elementari/commit/ea7e57f4af01da8db88384b196210fb7faedd358" rel="nofollow"><code>ea7e57f</code></a></li> <li>add show icons toggle to Footer <a href="https://github.com/janosh/elementari/commit/7649f9074e41b2906224ddeb14015f59961d535a" rel="nofollow"><code>7649f90</code></a></li> <li>add katex math rendering to markdown and mdsvex <a href="https://github.com/janosh/elementari/commit/81ce9b3c3925f19eaa7337dd8e8af804cb0ad286" rel="nofollow"><code>81ce9b3</code></a></li> <li>rename package and repo to sveriodic-table <a href="https://github.com/janosh/elementari/commit/7867167760baa84416890c0329c48175ee13a038" rel="nofollow"><code>7867167</code></a></li> <li>fix scatter point fill color, <code>mv {ChemicalElement-&gt;ElementTile}.svelte</code>, now controlled externally by PeriodicTable.svelte <a href="https://github.com/janosh/elementari/commit/9d10109ffec04d2b4c5a58fb37c9920fda6712aa" rel="nofollow"><code>9d10109</code></a></li> <li>add PrevNextElement.svelte to element detail pages <a href="https://github.com/janosh/elementari/commit/266fab336c5e4f9abc46d611647435ae6181c03f" rel="nofollow"><code>266fab3</code></a></li> <li>fix ColorCustomizer which had zero effect since adding heatmap functionality <a href="https://github.com/janosh/elementari/commit/80dcfb0d52d9acbdbaf69ea6b23b5fd57d8891c5" rel="nofollow"><code>80dcfb0</code></a></li> <li>ptable color_scale prop now takes d3-scale-chromatic scale names or any function mapping [0,1] to color strings <a href="https://github.com/janosh/elementari/commit/84060cded5c05f3dd4c7007c1d0b78c28c020c90" rel="nofollow"><code>84060cd</code></a></li> <li>show table of electron occupations per orbital in element detail page <a href="https://github.com/janosh/elementari/commit/c3580c00030bad268b7701e500278ab0dfb0dc45" rel="nofollow"><code>c3580c0</code></a></li> <li>add <strong>layout +</strong>error pages <a href="https://github.com/janosh/elementari/commit/ffe433ec30acc29acffe194afbf9e3d86ec1ddd1" rel="nofollow"><code>ffe433e</code></a></li> <li>show PeriodicTable on element detail pages <a href="https://github.com/janosh/elementari/commit/b7d1313a3233e4fe2989906a583e8a5c1a808b8b" rel="nofollow"><code>b7d1313</code></a></li> <li>improve detail page layout <a href="https://github.com/janosh/elementari/commit/b6cf71af4c0418955253ca23ca1bd89db49942c3" rel="nofollow"><code>b6cf71a</code></a></li> <li>fix oversights <a href="https://github.com/janosh/elementari/commit/4f40e9738a470c61847a33c503f12cd271e58001" rel="nofollow"><code>4f40e97</code></a></li> <li>improve test coverage for periodic table in heatmap mode and Bohr atoms page <a href="https://github.com/janosh/elementari/commit/343662b7a8dfd40b7dfc59f34c2a623e2d7367ee" rel="nofollow"><code>343662b</code></a></li> <li>move types into src/lib/index.ts <a href="https://github.com/janosh/elementari/commit/b7068822b8b305de551393e379bdfa49ca31cf6f" rel="nofollow"><code>b706882</code></a></li> <li>pnpm add -D d3-color to set ElementTile text_color based on lightness of bg_color <a href="https://github.com/janosh/elementari/commit/a0b82fdc4bef6e794d4697939bcb9391d7f4dcc5" rel="nofollow"><code>a0b82fd</code></a></li> <li>add color scale ramp slots to ColorScaleSelect to provide visual preview of color scale <a href="https://github.com/janosh/elementari/commit/ebcb0a32456dcfbff0686c0a948780adb4c8f382" rel="nofollow"><code>ebcb0a3</code></a></li> <li>pnpm add -D svelte-zoo mdsvexamples <a href="https://github.com/janosh/elementari/commit/1a76bae0eb8cf074ec17246460e95bc6815b9de9" rel="nofollow"><code>1a76bae</code></a></li> <li>keep scroll pos on element tile links <a href="https://github.com/janosh/elementari/commit/2dbc38207ad4b1acbdb6b7dbc54df045e160179b" rel="nofollow"><code>2dbc382</code></a></li> <li>add basic E2E tests and run in CI on push &amp; pull to main branch <a href="https://github.com/janosh/elementari/commit/e03191935775c4853091220624773942835edfc3" rel="nofollow"><code>e031919</code></a></li> <li>add ScatterPlot into TableInset showing periodicity trends when heat map selected <a href="https://github.com/janosh/elementari/commit/efd2ed6f1705c2ae92d7dbcf18ad0b9a560a52c9" rel="nofollow"><code>efd2ed6</code></a></li> <li>add EasterEgg.svelte <a href="https://github.com/janosh/elementari/commit/c8959badde4b777f83f01dbf941c5a3086a1c5b7" rel="nofollow"><code>c8959ba</code></a></li> <li>delete ‘boil’ key in periodic-table-data.ts <a href="https://github.com/janosh/elementari/commit/e8eb1cf846beced5c86990afffcefa7c2047dc7a" rel="nofollow"><code>e8eb1cf</code></a></li> <li>move ColorCustomizer from PeriodicTable to index.svelte and hide it when in heatmap mode <a href="https://github.com/janosh/elementari/commit/688a0bd3650d89f8f92b76488c1bbc80da64881d" rel="nofollow"><code>688a0bd</code></a></li> <li>remove EasterEgg.svelte from landing page <a href="https://github.com/janosh/elementari/commit/686c904f8046a7ae28ce325e5dee78b78d94a8ad" rel="nofollow"><code>686c904</code></a></li> <li>improve element tile and element stats inset screen width responsiveness <a href="https://github.com/janosh/elementari/commit/7b2b7628d132a27bf3fcd8a581c7156b6695f016" rel="nofollow"><code>7b2b762</code></a></li> <li>only wrap ElementTile in <code>&lt;a&gt;</code> if passed href prop, else <code>&lt;div&gt;</code> <a href="https://github.com/janosh/elementari/commit/d8643c8133f27b058b0992c019d134e4b27f96b8" rel="nofollow"><code>d8643c8</code></a></li> <li>add vitest unit tests <a href="https://github.com/janosh/elementari/commit/fad1b3a90176bdb5ffd45168adc81f943fd2dbb8" rel="nofollow"><code>fad1b3a</code></a></li> <li>add contributing.md <a href="https://github.com/janosh/elementari/commit/3033f6e6b30856f66adaee689ea5f6f432ffa644" rel="nofollow"><code>3033f6e</code></a></li> <li>add tests ‘clicking element tile emits event’, ‘gap prop’ and ‘setting active_category=%s highlights corresponding element tiles’ <a href="https://github.com/janosh/elementari/commit/36e757d29ee47a3db015c8de433b148ba5a23ccc" rel="nofollow"><code>36e757d</code></a></li> <li>fix pretty_num() raising TypeError: Cannot read properties of null (reading ‘toExponential’) <a href="https://github.com/janosh/elementari/commit/fa81d2977296d1a9159b5873e1079cb8f5138b77" rel="nofollow"><code>fa81d29</code></a></li> <li>use src/(routes|lib)/index.ts convenience imports internally <a href="https://github.com/janosh/elementari/commit/35f7fbe8e1019d0813f2fcd5cbf5f364b9174bdb" rel="nofollow"><code>35f7fbe</code></a></li> <li>move heatmap + color_scale to svelte stores <a href="https://github.com/janosh/elementari/commit/0bb686b05399d63829ec27d57ff7b95b1f7ef790" rel="nofollow"><code>0bb686b</code></a></li> <li>allow navigating periodic table and detail pages with arrow keys <a href="https://github.com/janosh/elementari/commit/8ffef5b4e02578b18eaf4d4eb2999a2d40b93508" rel="nofollow"><code>8ffef5b</code></a></li> <li>reduce max-width landing page ptable, negative margins on bohr atom demo, replace Toggle with svelte-zoo’s Toggle <a href="https://github.com/janosh/elementari/commit/8e4c90a58e05ece552bb662662df0cf8f15cc63f" rel="nofollow"><code>8e4c90a</code></a></li> <li>PeriodicTable forward click, mouseenter, mouseleave, keyup, keydown events from ElementTile <a href="https://github.com/janosh/elementari/commit/13db2fa6cd32637e5a468496a07ea45de622f728" rel="nofollow"><code>13db2fa</code></a></li> <li>add src/fetch-elem-images.ts to download element photos to static assets <a href="https://github.com/janosh/elementari/commit/a2dff384e2642f9c4d0916dbc9178b19ed508744" rel="nofollow"><code>a2dff38</code></a></li> <li>fix Bohr electron orbital speed <a href="https://github.com/janosh/elementari/commit/ff3af1af12ef9d6c67fb673cd048028ea424317e" rel="nofollow"><code>ff3af1a</code></a></li> <li>fix ScatterPlot label and grid offset <a href="https://github.com/janosh/elementari/commit/942719b2e7f3f896406e909f93cc57a4eca9cc3a" rel="nofollow"><code>942719b</code></a></li> <li>declare module periodic-table-data.ts + clean up <a href="https://github.com/janosh/elementari/commit/6b9f7178246a9aee0c02c6abe634811eb95f6650" rel="nofollow"><code>6b9f717</code></a></li> <li>add coverage badges to readme <a href="https://github.com/janosh/elementari/commit/39da8c16000676a6381989a7dffd295cf727f6a6" rel="nofollow"><code>39da8c1</code></a></li> <li>add hover tooltip for scatter plot <a href="https://github.com/janosh/elementari/commit/07453070fdd77862279adeede2fead33fd3372bf" rel="nofollow"><code>0745307</code></a></li> <li>add ElementTile unit tests <code>&#39;show_\${prop} toggles \${prop} visibility&#39;</code> and ‘applies class active when active=true’ <a href="https://github.com/janosh/elementari/commit/fd8c33f8edc21d007a17fae8c22bd6f37c245eb6" rel="nofollow"><code>fd8c33f</code></a></li> <li>add prop gap = <code>0.3cqw</code> between element tiles, default is 0.3% of container width <a href="https://github.com/janosh/elementari/commit/aa6b503cca26e22d1aa5cb5305866f3add2ecff7" rel="nofollow"><code>aa6b503</code></a></li> <li>add npm install cmd to readme <a href="https://github.com/janosh/elementari/commit/d8e15e9cb7f0e648c5342672eceb5d88723d18b0" rel="nofollow"><code>d8e15e9</code></a></li> <li>add src/lib/BohrAtom.svelte <a href="https://github.com/janosh/elementari/commit/ccb8e020704884c30c813cb1ef05ba1ec81cf589" rel="nofollow"><code>ccb8e02</code></a></li> <li>fix scatter plot not showing on element detail pages without photo <a href="https://github.com/janosh/elementari/commit/9501bbbfe2f24541e4a8db3ab7192702653744d7" rel="nofollow"><code>9501bbb</code></a></li> <li>ElementTile use text color also for active/hover border <a href="https://github.com/janosh/elementari/commit/178c27e375a37f0979ce51c31f84b6a5b4ec8625" rel="nofollow"><code>178c27e</code></a></li> <li>add BohrAtom to [slug].svelte <a href="https://github.com/janosh/elementari/commit/6b3a71d1ad675252f1df926618a4186d0d9b0fc2" rel="nofollow"><code>6b3a71d</code></a></li> <li>add src/lib/Toggle.svelte <a href="https://github.com/janosh/elementari/commit/a80df20d7007fb66f5fe1b4e04e2cd2e9ee4264c" rel="nofollow"><code>a80df20</code></a></li> <li>add x and y axes to ScatterPlot.svelte <a href="https://github.com/janosh/elementari/commit/f6f8325d1d9f76861df0c53ea832a3833762284c" rel="nofollow"><code>f6f8325</code></a></li> <li>add prop highlight_shell to BohrAtom.svelte <a href="https://github.com/janosh/elementari/commit/5741f348c12339e613a91aa035d5ca961d75f141" rel="nofollow"><code>5741f34</code></a></li> <li>improve SEO meta tags on index and [slug] pages <a href="https://github.com/janosh/elementari/commit/abb515269ef6e0da5b2e8d7962b14da711242551" rel="nofollow"><code>abb5152</code></a></li> <li>add script src/update-site-screenshots.ts <a href="https://github.com/janosh/elementari/commit/b70e8bd1e8b3f5237e1186fe1ef13d0dc896b64b" rel="nofollow"><code>b70e8bd</code></a></li> <li>add src/lib/PropertySelect.svelte used byindex.svelte and [slug].svelte <a href="https://github.com/janosh/elementari/commit/2654347ebfe27ba9bac11e04dc8e3ad7c6371d53" rel="nofollow"><code>2654347</code></a></li> <li>incl logo in readme heading, update deps, fix error page offline warning <a href="https://github.com/janosh/elementari/commit/415e788d62d2e770d961cedb6f8e2f82ae9c72e9" rel="nofollow"><code>415e788</code></a></li> <li>simplify svg coords in BohrAtom.svelte by placing origin in <svg>center <a href="https://github.com/janosh/elementari/commit/3511ca445975f2f9654a4d02eba9c05cf1ca94f7" rel="nofollow"><code>3511ca4</code></a></svg></li> <li>move d3-array, d3-interpolate-path, d3-shape, d3-scale, @iconify/svelte from package devDeps to deps <a href="https://github.com/janosh/elementari/commit/f90147114cb46112222e2a8d89e22144e2081f90" rel="nofollow"><code>f901471</code></a></li> <li>add src/routes/bohr-atoms.svelte <a href="https://github.com/janosh/elementari/commit/b77abe868e9c4fe62831c19380ffb5158b1a0f92" rel="nofollow"><code>b77abe8</code></a></li> <li>use new SvelteKit snapshot feature to restore color scale on browser back navigation <a href="https://github.com/janosh/elementari/commit/edf121debc2a02c455a46af134802e5ea96fa3d4" rel="nofollow"><code>edf121d</code></a></li> <li>add element detail page screen recording to readme <a href="https://github.com/janosh/elementari/commit/88a27bebb8deda53ed75724622b1c3ab231a1c2b" rel="nofollow"><code>88a27be</code></a></li> <li>add toggle to start/stop electrons orbiting nucleus <a href="https://github.com/janosh/elementari/commit/fcd9022ceea8e8ed18a2a5633fd6a8fac41e2b87" rel="nofollow"><code>fcd9022</code></a></li> <li>fix density unit to g/liter for gases instead of g/cm^3 for solids/liquids <a href="https://github.com/janosh/elementari/commit/a145443a69c3ab1e4c42902f440308f506df3ce3" rel="nofollow"><code>a145443</code></a></li> <li>export active_element + active_category from PeriodicTable.svelte <a href="https://github.com/janosh/elementari/commit/56ce7e38e6314dd1afab2422e0af137e30a618f4" rel="nofollow"><code>56ce7e3</code></a></li> <li>move non-package components to new src/site dir <a href="https://github.com/janosh/elementari/commit/14440aea8d4d83cde00e6cc43d7cfe8e97c91f26" rel="nofollow"><code>14440ae</code></a></li> <li>hide element names if <code>windowWidth &lt; 1000</code> to prevent text overflow <a href="https://github.com/janosh/elementari/commit/905d93221059708eb9e77b8cbbd4d8342c497140" rel="nofollow"><code>905d932</code></a></li> <li>drop year heatmap, add covalent_radius + first_ionization instead <a href="https://github.com/janosh/elementari/commit/6b2953e049a340c830ef0a8e2b7a70595824f88c" rel="nofollow"><code>6b2953e</code></a></li> <li>keep increased brightness on last-active element <a href="https://github.com/janosh/elementari/commit/b441c78fef0f2015038b06716619a48af9fccda3" rel="nofollow"><code>b441c78</code></a></li> <li>update index page screenshot <a href="https://github.com/janosh/elementari/commit/853cd181bc16fa61dc67062f265ed272cc3c2e86" rel="nofollow"><code>853cd18</code></a></li> <li>tweak ColorCustomizer.svelte CSS <a href="https://github.com/janosh/elementari/commit/cdcf92e405a50417a416d18b534292a4bdd8dfa7" rel="nofollow"><code>cdcf92e</code></a></li> <li>group demo routes <a href="https://github.com/janosh/elementari/commit/89aae68e0a0dd1ac31b34eaa01a0fe787be15685" rel="nofollow"><code>89aae68</code></a></li> <li>add ScatterPlot axis labels <a href="https://github.com/janosh/elementari/commit/65fdc41b36ee1aa0666a180f925fcd592451101f" rel="nofollow"><code>65fdc41</code></a></li> <li>change import to import type for purely type imports <a href="https://github.com/janosh/elementari/commit/ac53e0e1d172e69e506cb9de0a593ac9021b5d3f" rel="nofollow"><code>ac53e0e</code></a></li> <li>display BohrAtom in PeriodicTable if window width permits <a href="https://github.com/janosh/elementari/commit/c5aacdc100e3aaf8e69eced79046ca5f400eefc0" rel="nofollow"><code>c5aacdc</code></a></li> <li>make ScatterPlot always show current element on detail pages unless user actively hovers another element <a href="https://github.com/janosh/elementari/commit/6a4c021e6c53a6a815d22a97b679680e3d17c8c1" rel="nofollow"><code>6a4c021</code></a></li> <li>document BohrAtom.svelte props <a href="https://github.com/janosh/elementari/commit/bc100c221961f312641c1ba4f959b6aff3bff96c" rel="nofollow"><code>bc100c2</code></a></li> <li>reinstate default category color css variables <a href="https://github.com/janosh/elementari/commit/7dae519f6e4b155945699a40482564f755372840" rel="nofollow"><code>7dae519</code></a></li> <li>acknowledge images-of-elements.com and github.com/kadinzhang/Periodicity in readme <a href="https://github.com/janosh/elementari/commit/92d9941b1d274bf9a827399532a32aa2d40071df" rel="nofollow"><code>92d9941</code></a></li> <li>link to /bohr-atoms page from footer <a href="https://github.com/janosh/elementari/commit/eca7889d304203b39de0207bdcbf9a70efa5839a" rel="nofollow"><code>eca7889</code></a></li> <li>silence sveltekit tsconfig warning <a href="https://github.com/janosh/elementari/commit/c3a4a0c5e8072c896dfa0f576a8ee3ed400a55b5" rel="nofollow"><code>c3a4a0c</code></a></li> <li>mv src/lib/graph/* src/lib <a href="https://github.com/janosh/elementari/commit/2d7eb2f64e13034b3dfca3e504259be37871028d" rel="nofollow"><code>2d7eb2f</code></a></li> <li>add screenshot to readme <a href="https://github.com/janosh/elementari/commit/54084ed70ddb1de81a1800dbd02f30af4a30ea2f" rel="nofollow"><code>54084ed</code></a></li></ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Changelog, "Changelog").$$render($$result, {}, {}, {})}</main> ${validate_component(Toc, "Toc").$$render(
    $$result,
    {
      headingSelector: "main > :where(h3, h4)",
      breakpoint: 1250
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
