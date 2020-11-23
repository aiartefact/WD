var first_task = '';


input_number.onclick = function () {

            var first_num = $('#first_number').val();
            var second_num = $('#second_number').val();

            if (first_num <= 0 || second_num<= 0) {
                $('#first').html("Значення катета повинно бути більше за 0");
            }
            else {
                var result;
                result = Math.sqrt(Math.pow(first_num, 2) + Math.pow(second_num, 2))
                first_task += "Сума квадратів катетів із значеннями <b>" + first_num + " </b>та <b>" + second_num + " </b>дорівнює гіпотенузі зі значенням <b>" + result + '</b><br>';

            document.write(first_task);
            }
            
        }