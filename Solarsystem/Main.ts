namespace Body {
    window.addEventListener("load", handleLoad)

    export let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        //crc2.fillStyle = "black";
        //crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.width);

        createBody();

        window.setInterval(update, 20);
    }

    const orbit0: Body[] = [];
    const orbit1: Body[] = [];
    const orbit2: Body[] = [];
    const orbit3: Body[] = [];

    function createBody(): void {
        console.log("budy")
        const sun: Body = new Body("Sun", 80, 0, 0, "yellow", orbit1);
        const earth: Body = new Body("Earth", 20, 15, 70, "blue", orbit2);
        const moonearth: Body = new Body("Earthmoon", 5, 30, 25, "blue", orbit3);

        orbit0.push(sun);
        orbit1.push(earth);
        orbit2.push(moonearth);

    }


    function update(): void {
        console.log("update");

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (const earth of orbit1) {
            console.log(earth);
            earth.draw(1 / 50);
            //earth.draw(1 / 50);
            //moonearth.draw(1 / 50);
        }
    }
}