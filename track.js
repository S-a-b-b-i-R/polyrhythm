class Track {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    getPosition(offset) {
        return {
            x: this.center.x + Math.cos(offset * 3) * this.radius,
            y: this.center.y - Math.sin(offset) * this.radius,
        };
    }

    draw(ctx) {
        ctx.beginPath();
        // ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        for (let a = 0; a < Math.PI * 2; a += 0.01) {
            ctx.lineTo(
                this.center.x + Math.cos(a * 3) * this.radius,
                this.center.y - Math.sin(a) * this.radius
            );
        }
        ctx.closePath();
        ctx.strokeStyle = "white";
        ctx.stroke();
    }
}
