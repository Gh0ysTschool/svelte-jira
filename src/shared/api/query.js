let cache = {};
const useQuery = (url) => {
    if (url=='/project')
        return [
            {
                data:{users:[{id:0,name:'00'},{id:1,name:'11'},{id:2,name:'22'},{id:3,name:'33'}],name:'testname',category:'catagory'}, 
                error:false, 
                setLocalData:(localdata)=>cache={...cache,...localdata}
            },
            ()=>{

            }
        ]
}
export default useQuery;
