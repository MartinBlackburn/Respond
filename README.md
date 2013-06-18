#Respond

Respond is a simple framework that aims to help in creating responsive websites and wireframes by having a fluid grid and media-queries to resize content and collapse columns on smaller displays.

##Terminology
**A row (.row)**  
A full width container, this allows for a background to span the full width of the page. Usually other classes are declared here, like .header, so specific content within a row can be styled.

**Content container (.content)**  
This a container that is centered within a .row, given a max-width.

**Columns (.column-number)**  
Columns must add up to 12 or less. You can nest columns within columns.

##Basic markup
```html
<div class="row">
    <div class="content">
        <div class="column-6">
            <p>Column 1</p>
        </div>
        
        <div class="column-6">
            <p>Column 2</p>
        </div>
    </div>
</div>
```

##Nested columns
```html
<div class="row">
    <div class="content">
        <div class="column-6">
            <div class="column-6">
                <p>Column 1a</p>
            </div>
            
            <div class="column-6">
                <p>Column 1b</p>
            </div>
        </div>
        
        <div class="column-6">
            <p>Column 2</p>
        </div>
    </div>
</div>
```