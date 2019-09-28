function moveNext(object,index){
object.value = object.value.toUpperCase();
if(object.value.length == 5 && index != 9){
document.forms[0].elements[index+1].focus();
}

}

//define the find_diff function
function find_diff()
{

    var f = document.forms[0];
    var stu_ans="";

    for(var i = 0; i<10 ;i++){
    console.log(f.elements[i].value);
    stu_ans += f.elements[i].value;

    }

    if(stu_ans.length != 50)
    {
    alert('答案数量应为50！' )
    return
    }
    console.log(stu_ans)
    // initialize
    var num_language_wrong = 0
    var num_non_language_wrong = 0
    var s_diff_language = ''
    var s_diff_non_language = ''
    // 正确答案
    var correct_ans = 'ABDEAACABEABAECDCADBEDCEDGCDAECBGEFCDIAAACCACABAEI'

    for (var idx=0; idx<50; idx++)
    {
        if(correct_ans[idx] != stu_ans[idx])
        {
            // 计算错题数量
            if(idx < 25)                     // 言語部分
            {
                num_language_wrong += 1
                s_diff_language += idx+1 + '、正确答案：' + correct_ans[idx] + ' | 考生答案：' + stu_ans[idx] + '<br>'
            } else {                        // 非言語

                num_non_language_wrong += 1
                s_diff_non_language += idx+1-25 + '、正确答案：' + correct_ans[idx] + ' | 考生答案：' + stu_ans[idx] + '<br>'
            }

        }


    }


    var total_wrong = num_language_wrong + num_non_language_wrong
    console.log('言語: ' + (25 - num_language_wrong) + '/25, ' + '分数:' + (25 - num_language_wrong) * 2 + ', ' + s_diff_language)
    console.log('非言語: ' + (25 - num_non_language_wrong) + '/25, ' + '分数:' + (25 - num_non_language_wrong) * 2 + ', ' + s_diff_non_language)
    console.log('总分数:' + (50 - total_wrong) * 2)

    document.getElementById("lan-correct").innerHTML = (25 - num_language_wrong) + '/25'
    document.getElementById("lan-score").innerHTML = (25 - num_language_wrong) * 4
    document.getElementById("non-lan-correct").innerHTML = (25 - num_non_language_wrong) + '/25'
    document.getElementById("non-lan-score").innerHTML = (25 - num_non_language_wrong) * 4
    document.getElementById("total-score").innerHTML = (50 - total_wrong) * 2
    document.getElementById("lan-wrong-ans").innerHTML = s_diff_language
    document.getElementById("non-lan-wrong-ans").innerHTML = s_diff_non_language


}

    var input = document.getElementById("stu_ans")
    input.addEventListener("keypress", function(event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});


var CORRECET_ANSWER = 'ADEACBEAAECDADCBCCEEDBABCGCDECBGEFCDCFCBEGGEICFBEA';
var STU_ANSWER = 'ADEACAADAECDADCBCCEEDBABCGCDECBGEFCDCFCBEGGEGCFCEA';

//find_diff(CORRECET_ANSWER,STU_ANSWER)