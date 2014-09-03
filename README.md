# nad-bindings

Generic Node.js bindings, uses @TooTallNate's bindings for `.node` modules and `process.binding` when run as part of Node.js.

Use it for projects generated with [nad](https://github.com/thlorenz/nad).

```js
var leveldown = require('nad-bindings')('leveldown.node').leveldown
```

## Installation

    npm install nad-bindings

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="resolveBinding"><span class="type-signature"></span>resolveBinding<span class="signature">(name)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convenience function to consistently resolve a module binding for two cases:</p>
<ul>
<li>1) module is run as addon and the <code>bindings</code> module is used to resolve the module</li>
<li>2) module is currently being debugged and directly executed inside a node process and therefore is resolved via <code>process.binding</code></li>
</ul>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>name</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>full name of the module</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/nad-bindings/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/nad-bindings/blob/master/index.js#L7">lineno 7</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the binding object of the native module</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## Implementation

Looks for `DYLD_LIBRARY_PATH` environment variable to determine whether it is run via Xcode.
Any improvements on that are welcome.

## License

MIT
