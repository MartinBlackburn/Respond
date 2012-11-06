#Respond

Respond is a simple framework that aims to help in creating responsive websites and wireframes by having a fluid grid and mediaqueries to resize content and collapse columns on smaller displays.

Example will be a complete website built using Respond

##How it works
```html
<div class="row">
    <div class="content">
        <div class="threecol">
            <p>Column 1</p>
        </div>
        
        <div class="threecol">
            <p>Column 2</p>
        </div>
        
        <div class="threecol">
            <p>Column 3</p>
        </div>
        
        <div class="threecol last">
            <p>Column 4</p>
        </div>
    </div>
</div>
```

.row is a full width container that, which allows for a background to span the full width of the page.  
.row.altBG will allow for quick changes between two backgrounds.

.content centers the content at a max width, it will contain all the columns in any combination that adds up to 12 or less.

.last must be included on the last column to remove any unwated margin allowing all the columns fit on the page.