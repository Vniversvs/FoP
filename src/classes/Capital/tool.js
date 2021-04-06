export default function Tool ( toolName, cost, upgrade, effect ) {
    this.toolName = toolName;
    this.cost = cost;
    this.upgrade = upgrade;
    this.effect = effect;

    this.addPlayer = function ( player ) {
        this.player = player;
    };
};