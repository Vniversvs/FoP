export default function Capital ( resources, tools ) {
    this.resources = resources;
    this.tools = tools;

    this.addPlayer = function ( player ) {
        this.player = player;
    };
};