export default function Countdown() {
  return (
    <div className="mt-12 flex gap-6">
      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">365</h3>
        <p>Days</p>
      </div>

      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">00</h3>
        <p>Hours</p>
      </div>

      <div className="rounded-xl bg-white/5 p-6">
        <h3 className="text-4xl font-bold">00</h3>
        <p>Minutes</p>
      </div>
    </div>
  );
}
