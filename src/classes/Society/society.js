export default function Society ( population, labor ) {
    this.population = population;
    this.labor = labor;

    this.addPlayer = function ( player ) {
        this.player = player;
    };
};