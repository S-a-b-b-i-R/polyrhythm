class Track {
    constructor(center, radius, hue) {
        this.center = center;
        this.radius = radius;
        this.hue = hue;
        this.period = Math.PI;
    }

    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius,
            round: Math.floor(offset / this.period),
        };
    }

    draw(ctx) {
        ctx.beginPath();
        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        for (let a = 0; a < Math.PI * 2; a += 0.01) {
            ctx.lineTo(
                this.center.x + Math.cos(a) * this.radius,
                this.center.y - Math.sin(a) * this.radius
            );
        }
        ctx.closePath();
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.stroke();
    }
}
