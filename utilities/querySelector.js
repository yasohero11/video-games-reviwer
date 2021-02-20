 module.exports =  function (myQuery) {
   
    let fields
    let query = {...myQuery}
    let sortby
    let limit = parseInt(query.limit , 10) || 10
    let page = parseInt(query.page , 10) || 1
    let skip = (page -1) * limit
    if(query.select)
        fields = query.select.split(",").join(" ")
    if(query.sort)
        sortby = query.sort.split(",").join(" ")



    let removePrames = ["select","sort","page","limit"]
           
    removePrames.forEach(param => {
            delete query[param]
    });
    console.log(query)
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, str => `$${str}` ) // the 'g' for globel in the end of the regex allow the regex to be applied to the all string
                                                                 // now in this replce method replace any string gt,gtle,lt... to the string $gt, $gte , $lt , ...     
    queryStr  =JSON.parse(queryStr)

    return {queryStr,fields,sortby,limit,page,skip}
}