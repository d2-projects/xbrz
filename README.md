# JavaScript 中的 xBRZ 算法实现

high quality image upscaling filter by Zenju

![npm](https://img.shields.io/npm/v/@d2-projects/xbrz)

在包管理器中引入

``` sh
npm i @d2-projects/xbrz
```

``` js
import xbrz from '@d2-projects/xbrz'
```

在浏览器中引入

``` html
<script src="https://cdn.jsdelivr.net/npm/@d2-projects/xbrz/dist/xbrz.js"></script>
```

使用

```
xbrz.scaleToCanvas({
  source: './source.png',
  canvas: document.querySelector('#canvas'),
  scale: 6
})
```

## 算法实现

* [xbrz](https://sourceforge.net/projects/xbrz/)
* [xbrz-in-java](https://intrepidis.blogspot.com/2014/02/xbrz-in-java.html)
* [will-wyx/xbrz](https://github.com/will-wyx/xbrz)
