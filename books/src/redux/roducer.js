const initialState = {
    login:false
};
const roducer = ( state = initialState , action) => {
    switch (action.type){
        case 'ID_LOGIN' :
            return(
                Object.assign({},state,{
                    login:action.text
                })
            );
        default:
            return(state);
    }
}
export default roducer