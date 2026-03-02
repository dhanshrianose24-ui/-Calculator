<script>
        let inputstr=''
        function Calculation(v){
            inputstr+=v
            document.calculator.input.value=inputstr
        }
        function hide(){
            let calst=document.getElementById('cal');
            calst.style.display='none';
        }
        function show(){
            let calst= document.getElementById('cal');
            calst.style.display='block';

        }
    </script>
