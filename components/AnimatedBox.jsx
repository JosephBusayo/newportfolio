const AnimatedBoxes = () => {
    const boxes = [
        { top: "5%", left: "40%", delay: "-2s" },
        { top: "20%", left: "15%", delay: "-4s" },
        { top: "15%", right: "35%", delay: "-6s" },
        { top: "40%", right: "30%", delay: "-8s" },
        { top: "48%", left: "55%", delay: "-5s" },
        { top: "55%", left: "-1%", delay: "-3s" },
        { top: "65%", left: "30%", delay: "-7s" },
        { top: "70%", right: "15%", delay: "-5s" },
        { top: "85%", left: "20%", delay: "-9s" },
        { top: "95%", right: "40%", delay: "-10s" },
        { top: "90%", left: "10%", delay: "-11s" },
        { top: "5%", right: "10%", delay: "-12s" },
        { top: "10%", right: "50%", delay: "-1s" },
        { top: "3%", right: "20%", delay: "-13s" },
    ];

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {boxes.map((box, index) => (
                <div
                    key={index}
                    className="absolute w-[15px] h-[15px] border-[1px] border-accent shadow-md rounded-sm animate-floating"
                    style={{
                        top: box.top,
                        left: box.left,
                        right: box.right,
                        animationDelay: box.delay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default AnimatedBoxes;
