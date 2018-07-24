$(function(){
   let page = 1;
   let i = 4;
    $("button.next").click(function(){
        let $v_show = $("div.v-show");
        let $v_content = $("div.v-content");
        
        let v_width = $v_content.width();
        let len = $v_show.find("li").length;
        let page_count = Math.ceil(len/i);
        console.log(v_width, len)
    });

    
    
});