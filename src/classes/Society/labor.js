export default function Labor ( laborName, resourceInput, resourceOutput, tools ) {
    this.laborName = laborName;
    this.resourceInput = resourceInput;
    this.resourceOutput = resourceOutput;
    this.tools = tools;

    this.addPlayer = function ( player ) {
        this.player = player;
    };
};