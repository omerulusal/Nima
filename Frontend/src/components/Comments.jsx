const Comments = () => {
    return (
        <div>
            <div className="flex flex-col gap-2 max-w-md w-full  text-black p-5 rounded-md mt-8 shadow-md duration-150">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-between w-full">
                        <p className="text-xs">John Doe</p>
                        <p className="text-xs">June 1, 2000</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <h3 className="text-xl font-bold">Great Experience!</h3>

                    <div className="text-xs">
                        <div className="flex flex-row">
                            Add to stars
                        </div>
                    </div>
                </div>

                <div className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
                    odio vitae vestibulum. Donec in efficitur ipsum, sed dapibus eros.
                </div>
            </div>

        </div>
    )
}

export default Comments