function dich() {
    let arr_EN=['gun','attack','weapon','girl','beautiful'];
    let arr_VN=['súng','tấn công','vũ khí','gái','xinh đẹp'];
    let chuoi=document.getElementById('str').value;
    let index_EN=0;
    let result="";
    for(let i=0;i<arr_EN.length;i++){
        if(chuoi===arr_EN[i]){
            index_EN=i;
            for(let j=0;j<arr_VN.length;j++){
                if(index_EN===j){
                    result=arr_VN[j];
                }
            }
        }
    }
    document.getElementById('result').innerHTML=result;
}
