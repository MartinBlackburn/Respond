Respond
===========

Responsive framework  
  
Grid shows the base file withour using any other CSS  
  
Example will show how a website could use the Respond framework  
  
The HTML
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
  
How it works  
.row is a full width container that, which allows for a background to span the full width of the page.  
  
.content centers the content at a max width, it will contain all the columns in any combination that adds up to 12 or less.  
  
.last must be included on the last column to remove any unwated margin allowing all the columns fit on the page.