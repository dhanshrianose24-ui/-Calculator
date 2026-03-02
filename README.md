# -Calculator
Using HTML,CSS,JAVASCRIPT
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcultion with Js</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .cal{
            margin: 10px auto;
            text-align: center;
            background-color: #eef3ff;
            width: 400px;
            border: 1px solid gray;
            border-radius: 10px;
            padding: 3px;
        }
        .header{
            width: 100%;
        }
        .header h2{
            float: left;
            padding-left: 10px;
            padding-top: 10px;
            font-size: 36px;
        }
        
        
        .close{
            font-size: 40px;
            float: right;
            font-weight: bold;
            padding-right: 10px;
            cursor: pointer;
        }
        table{
            width: 100%;
            border-collapse: collapse;
        }
        table textarea{
            resize: none;
            height: 100px;
            width: 100%;
            font-size: 30px;
            font-weight: bold;
            border: none;
        }
        table textarea:focus{
            outline: none;
        }
        table button{
            width: 94px;
            height: 60px;
            border: none;
            border-radius: 6px;
            background-color: white;
            font-size: 18px;
            box-shadow: 0px 2px 4px rgb(196,196,196);
            margin-bottom: 2px;
            cursor: pointer;
        }
        .btn-cal{
            height: 60px;
            width: 180px;
            color: white;
            background-color: #0067C0;
            font-size: 25px;
            border: none;
            border-radius: 6px;
            box-shadow: 0px 2px 4px rgb(196,196,196);
            margin-bottom: 2px;
            cursor: pointer;
        }
        table button:hover{
            background-color: #b2c4ee;
        }
        .btn-cal:hover{
            background-color: #11497a;
        }
    </style>
</head>
<body>
    <button type="button"class="btn-cal"onclick="show()">Calculator</button>
    <div class="cal" id="cal">
        <div class="header">
            <h2>Calculator</h2>
           <span type="button"class="close"onclick="hide()">&times;</span>
        </div>
        <div style="clear: both;"></div>
        <form action=""name="calculator">
            <table border="0">
                <tr>
                    <td colspan="4">
                        <textarea name="input"id=""placeholder="Calculation"></textarea>
                    </td>
                </tr>
                <tr>
                    <td><button type="button"onclick="Calculation('%')">& </button> </td>
                    <td><button type="button"onclick="input.value='',inputstr=''">  AC </button> </td>
                    <td><button type="button"onclick="input.value=input.value.slice(0,-1)">&#9984; </button> </td>
                    <td><button type="button"onclick="Calculation('/')">&#10135; </button> </td>
                </tr>
                <tr>
                  <td><button type="button"onclick="Calculation('7')">7 </button> </td>
                  <td><button type="button"onclick="Calculation('8')">8 </button> </td>
                  <td><button type="button"onclick="Calculation('9')">9 </button> </td> 
                  <td><button type="button"onclick="Calculation('*')">&times; </button> </td>  
                </tr>
                <tr>
                  <td><button type="button"onclick="Calculation('4')">4 </button> </td>
                  <td><button type="button"onclick="Calculation('5')">5 </button> </td>
                  <td><button type="button"onclick="Calculation('6')">6 </button> </td> 
                  <td><button type="button"onclick="Calculation('-')">&#10134; </button> </td>  
                </tr>
                <tr>
                  <td><button type="button"onclick="Calculation('3')">3 </button> </td>
                  <td><button type="button"onclick="Calculation('2')">2 </button> </td>
                  <td><button type="button"onclick="Calculation('1')">1 </button> </td> 
                  <td><button type="button"onclick="Calculation('+')">&#10133; </button> </td>  
                </tr>
                <tr>
                  <td><button type="button"onclick="Calculation('.')">. </button> </td>
                  <td><button type="button"onclick="Calculation('0')">0 </button> </td>
                  <td colspan="2"><button type="button"onclick="input.value=eval(inputstr)" class="btn-cal">=</button> </td>  
                </tr>
            </table>
        </form>
    </div>
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
    
</body>
</html>
