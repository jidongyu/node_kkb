/*
 * @Description: 
 * @Author: jidongyu
 * @Date: 2021-04-10 15:50:49
 * @LastEditTime: 2021-04-10 18:31:06
 * @LastEditors: jidongyu
 * @Reference: 
 */
/* 
    resData = :[
        {
            "key":"17fd66eb-9cfb-457b-8fed-a70bb6312e05",
            "columnName":"11",
            "requestRemark":"111",
            "dataType":"string",
            "remark":"1111",
            "children":[
                {
                    "key":"3a6b5081-c83a-46e9-95ba-0282b1018bbe",
                    "columnName":"11",
                    "requestRemark":"111",
                    "dataType":"string",
                    "remark":"1111",
                    "children":[
                    ]
                },
                {
                    "key":"5f88eba4-c660-4048-80f2-1cae1f6269f5",
                    "columnName":"3333",
                    "requestRemark":"333",
                    "dataType":"string",
                    "remark":"3333",
                    "children":[
                    ]
                }
            ]
        },
        {
            "key":"edcda285-08fe-4f71-81c1-0c318496b2ff",
            "columnName":"3333",
            "requestRemark":"333",
            "dataType":"string",
            "remark":"3333"
        },
        {
            "key":"d3aaa8cb-7acc-4255-9682-ea229bbad1e3",
            "columnName":"333",
            "requestRemark":"333",
            "dataType":"string",
            "remark":"3333"
        }
    ]
 */
const sourseData = [
    {
        "key": "17fd66eb-9cfb-457b-8fed-a70bb6312e05",
        "columnName": "1",
        "requestRemark": "1",
        "dataType": "string",
        "remark": "1",
        "children": [
            {
                "key": "3a6b5081-c83a-46e9-95ba-0282b1018bbe",
                "columnName": "11",
                "requestRemark": "11",
                "dataType": "string",
                "remark": "11",
                "children": [
                ]
            },
            {
                "key": "5f88eba4-c660-4048-80f2-1cae1f6269f5",
                "columnName": "22",
                "requestRemark": "22",
                "dataType": "string",
                "remark": "22",
                "children": [
                ]
            }
        ]
    },
    {
        "key": "edcda285-08fe-4f71-81c1-0c318496b2ff",
        "columnName": "222",
        "requestRemark": "222",
        "dataType": "string",
        "remark": "2222"
    },
    {
        "key": "d3aaa8cb-7acc-4255-9682-ea229bbad1e3",
        "columnName": "333",
        "requestRemark": "333",
        "dataType": "string",
        "remark": "3333"
    }
];

function findAndWirte(data,row,name,value){
    for(let i=0; i<data.length; i++ ){
        if(data[i].key === row.key){
            data[i][name] = value;
            break;
        }else if( data.children && data.children.length>0){
            findAndWirte(data.children,row,name,value)
        }
    }
    return data;
}

