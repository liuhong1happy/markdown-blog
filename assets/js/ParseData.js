window.ParseData = function(files) {
    var pData = { files: files, archive: { year: {}, month: {}, date: {}}, tags: {}}; // 计算后的数据
    var tData = { archive: { years: [], monthes: [], dates: []}, tags: []}; // 临时存储数据
    files.forEach(function(file){
        var date = new Date(file.date);
        tData.archive.years.push(date.getFullYear());
        tData.archive.monthes.push(date.getFullYear()+"/"+(date.getMonth()+1));
        tData.archive.dates.push(date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate())
        tData.tags = tData.tags.concat(file.tags || []);
    })

    tData.archive.years.forEach(function(year) {
        var value = pData.archive.year[year];
        var hasKey = !!value;
        pData.archive.year[year] = hasKey ? value + 1 : 1;
    })

    tData.archive.monthes.forEach(function(month) {
        var value = pData.archive.month[month];
        var hasKey = !!value;
        pData.archive.month[month] = hasKey ? value + 1 : 1;
    })

    tData.archive.dates.forEach(function(date) {
        var value = pData.archive.date[date];
        var hasKey = !!value;
        pData.archive.date[date] = hasKey ? value + 1 : 1;
    })

    tData.tags.forEach(function(tag) {
        var value = pData.tags[tag];
        var hasKey = !!value;
        pData.tags[tag] = hasKey ? value + 1 : 1;
    })
    return pData;
}