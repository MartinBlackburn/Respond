#Respond

Respond is a simple framework that aims to help in creating responsive websites and wireframes by having a fluid grid and mediaqueries to resize content and collapse columns on smaller displays.

##How it works
```html
<div class="row">
    <div class="content">
        <div class="column-3">
            <p>Column 1</p>
        </div>
        
        <div class="column-3">
            <p>Column 2</p>
        </div>
        
        <div class="column-3">
            <p>Column 3</p>
        </div>
        
        <div class="column-3">
            <p>Column 4</p>
        </div>
    </div>
</div>
```

.row is a full width container that, which allows for a background to span the full width of the page.  

.content centers the content at a max width, it will contain all the columns in any combination that adds up to 12 or less.