$(function(){
   
    $("button.next").click(function(){
        let $parent = $(this).parent("div.v-show");
        let $v_show = $parent.find("div.v-content-list");
        let $v_content = $parent.find("div.v-content");
        
        let v_width = $v_show.width()
        console.log(v_width)
    });

    
    
});