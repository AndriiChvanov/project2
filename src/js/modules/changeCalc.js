const changeCalc = (state) => {
    const sizeSelect = document.querySelectorAll('#size'),
        materialSelect = document.querySelectorAll('#material'),
        optionsSelect = document.querySelectorAll('#options'),
        promocodeSelect = document.querySelectorAll('.promocode'),
        resultBlock = document.querySelectorAll('.calc-price');


    function bindActionToElems(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                    case 'INPUT' :
                        state[prop] = item.value;
                        break;
                    case 'DIV' :
                        state[prop] = item.innerText;
                        break;
                }

                console.log(state);
            });
        });
    }



    bindActionToElems('change', sizeSelect, 'size');
    bindActionToElems('change', materialSelect, 'material');
    bindActionToElems('change', optionsSelect, 'options');
    bindActionToElems('input', promocodeSelect, 'promocode');
    bindActionToElems('change', resultBlock, 'result');



};

export default changeCalc;
