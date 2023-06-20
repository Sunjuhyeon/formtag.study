$(function(){
    $("#email-section .mail-select").change(function(){
        // console.log($(this).val())
        if($(this).val() == '직접입력' || $(this).val == ''){
            $("#email-section").addClass("act");
            $("#email-section .direct").focus();   
        }
        else($("#email-section")).removeClass("act");
    })
    
    // $("#leng-section input").change(function(){
    //     if($("#lengall").prop("checked")){
    //         $("#leng-section input:checkbox").prop('checked', true)
    //     }
    //     else(
    //         $("#leng-section input:checkbox").prop('checked', false)
    //     )
    // })
    // // all을 제외한 나머지 checkbox가 cheked라면 all을 체크해라
    // $("#leng-section input:checkbox").click(function(){
    //     var total = $("#leng-section input:checkbox").length;
    //     var checked = $("#leng-section input:checkbox").length;

    //     if (total != checked) $("#lengall").prop('checked', false);
    //     else $("#lengall").prop('checked', true);

    // })
    // is 는 true false 값을 잡아냄 -> yes or no
    // prop는 is의 속성을 가지면서 속성을 직접확인하는 작업을 한다

    $(".checkbox-group").on("click", "#lengall", function(){
        var checked = $(this).is(":checked");

        if(checked){
            $(this).parents(".checkbox-group").find("input").prop("checked", true);
        }else{
            $(this).parents(".checkbox-group").find("input").prop("checked", false)
        }
    });
    // all 체크 시 전체 체크

    $(".checkbox-group").on("click",".leng", function(){
        var checked = $(this).is(":checked");

        if(!checked){
            $("#lengall").prop("checked", false)
        }
    })
    // 하나라도 체크 해제 시 all체크 off

    $(".checkbox-group").on("click", ".leng", function(){
            var is_checked = true;

            $(".checkbox-group .leng").each(function(){
                is_checked = is_checked && $(this).is(":checked");
            });

            $("#lengall").prop("checked", is_checked);
    });
    //전체 체크 시 all에도 체크됨.
    
})