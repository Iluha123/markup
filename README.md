MarkUp
======================


To start project you need: 
-----

* git clone
* do npm i -g gulp bower
* npm i
* bower i
* gulp serve to start project

Theme Create:
-----

* Build you theme file "build-theme.less" lies In folder ThemeCreate. in Less you must do this code
```css
.theme-create(one);
```
* File "themeCreate.less" create base theme. You can see how to fast make your theme, more detail in coments. Example
```css
/*@font-weight: 400; @font-size: 20px; @line-height: 22px; @font-family: 'Roboto'*/
.base-font(400; 16px; 20px; 'Roboto');
```
there is variables which you can set
* Files that describes element, lies in folder ThemeCreate.

Material effect:
-----

* Button. add attribute "jx-btn" to your button. 
```html
<button class="btn-one" jx-btn type="button">Button</button>
```
* Placeholder. Structure you can see in "main/ThemeOne/ThemeOne.html" and
```html
  <div my-placeholder>
    <input id="code" class="inp-one" type="text"/>
    <label for="code">Postal Code</label>
  </div>
```
    

