Fader = function(fader) 
{   
    //settings
    var fadeTime = 1000;
    var viewTime = 6000;
    
    //show hidden slides and controls
    fader.find(".displayNone").each(function() 
    {
        $(this).removeClass("displayNone");
    });
    
    //controls
    $(".next").click(function(event) {
        event.preventDefault()
        
        resetTimer();
        fadeItem();
    });
    
    $(".prev").click(function(event) {
        event.preventDefault()
        
        resetTimer();
        fadeItem(-1);
    });
    
    $(".quick").click(function(event) {
        event.preventDefault()
        
        if(!$(event.delegateTarget).hasClass("selected"))
        {
            resetTimer();
            
            var slideTo = fader.find($(event.delegateTarget).parent()).index();
            
            fadeItem(slideTo-1);
        }
    });
    
    //variable for all slides
    function slides() {
        return fader.find(".sliderItem");
    }
    
    //variable for all controls
    function controls() {
        return fader.find(".quick");
    }
    
    //fadeout all slides
    slides().fadeOut(0);
    
    //set first slide to selected, and fade it in
    slides().first().addClass('selected');
    slides().first().fadeIn(0);  
    controls().first().addClass('selected');
    
    //auto scroll items
    var timer;
    resetTimer();
    
    function resetTimer()
    {
        clearInterval(timer);
        
        timer = setInterval(function()
        {
            fadeItem();
        }, fadeTime + viewTime);
    }
    
    //fade items when needed
    function fadeItem(slide)
    {
        //get current and next slide index
        var currentSlide = fader.find('.sliderItem.selected').index();
        var nextSlide = currentSlide + 1;
        
        //fade out current slide
        slides().eq(currentSlide).removeClass('selected');
        slides().eq(currentSlide).fadeOut(fadeTime);
        
        //if request for a certain slide
        if(slide)
        {
            nextSlide = slide;
        }
        if(slide == -1)
        {
            nextSlide = currentSlide - 1;
        }
        
        // loop to start if reached the end
        if (slides().size() == nextSlide) {
            nextSlide = 0;
        }
        
        //fade in new slide
        slides().eq(nextSlide).fadeIn(fadeTime);
        slides().eq(nextSlide).addClass('selected');
        
        //update controls
        controls().removeClass('selected');
        controls().eq(nextSlide).addClass('selected');
    };
};

$(function() 
{
    $(".fader").each(function()
    {
        new Fader($(this));
    });
});