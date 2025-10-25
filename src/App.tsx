import { createSignal } from "solid-js";

function App() {
	const [classCount, setClassCount] = createSignal(0);
	const [minutesInClass, setMinutesInClass] = createSignal(50);

	const totalMinutes = () => classCount() * minutesInClass();
	const hours = () => Math.floor(totalMinutes() / 60);
	const minutes = () => totalMinutes() % 60;

	const reset = () => {
		setClassCount(0);
		setMinutesInClass(50);
	};

	return (
		<main class="bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center items-center p-4 dark:text-gray-100">
			<section class="flex justify-center items-center min-h-screen flex-col gap-6 w-full">
				<h1 class="text-lg font-semibold mb-4">Class to Hours Converter</h1>
				<form class="flex flex-col items-center gap-8 w-full mx-auto">
					<div class="flex flex-col md:flex-row items-center w-full max-w-md gap-6 mx-auto">
						<div class="flex flex-col gap-2">
							<label for="class-hours" class="text-sm font-medium">
								Class Count
							</label>
							<input
								type="text"
								id="class-hours"
								class="border border-gray-200 px-4 py-2 rounded"
								value={classCount()}
								onInput={(e) => {
									if (Number.isNaN(+e.target.value) || +e.target.value < 0) {
										setClassCount(0);
									}
									setClassCount(+e.target.value);
								}}
							/>
						</div>
						<div class="flex flex-col gap-2">
							<label for="minutes-in-class" class="text-sm font-medium">
								Minutes in Class
							</label>
							<input
								type="text"
								id="minutes-in-class"
								class="border border-gray-200 px-4 py-2 rounded"
								value={minutesInClass()}
								onInput={(e) => {
									if (
										Number.isNaN(+e.target.value) ||
										+e.target.value < 0 ||
										+e.target.value > 1440
									) {
										setMinutesInClass(50);
									}
									setMinutesInClass(+e.target.value);
								}}
							/>
						</div>
					</div>
					<div class="w-full max-w-sm flex justify-center items-center">
						<button
							type="button"
							class="bg-blue-400 px-4 py-2 hover:bg-blue-500 transition-colors ease-in-out cursor-pointer rounded text-gray-100"
							onClick={reset}
						>
							Reset
						</button>
					</div>
				</form>
				<div>
					<p class="flex flex-col">
						<span class="font-medium mb-2">Total Time</span> {hours()}{" "}
						{hours() === 1 ? "hour" : "hours"} and {minutes()}{" "}
						{minutes() === 1 ? "minute" : "minutes"}
					</p>
				</div>
			</section>
		</main>
	);
}

export default App;
