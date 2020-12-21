class JsonData
{
    constructor(jsonfile,scenario)
    {
        this.jsonfile = jsonfile;
        this.scenario = scenario;
        var userCredentialsObject = JSON.parse(JSON.stringify(this.jsonfile));
        this.data = userCredentialsObject[this.scenario];
    }   
}

export default JsonData;