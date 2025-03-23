import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

const BookingList = () => {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  return bookItems.length === 0 ? (
    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-ubuntu text-lg text-center flex flex-col items-center gap-4">
      <span className="text-6xl">📖❌</span> {/* ใช้ Emoji แทน BookX */}
      No Venue Booking
    </span>
  ) : (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4">
      {bookItems.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col gap-4 p-4 bg-slate-100 rounded-md shadow-md shadow-slate-300 w-auto"
        >
          <div className="flex flex-row gap-3 items-center">
            <span className="bg-slate-800 text-slate-100 font-jetbrains text-sm px-2 py-1 rounded-md">
              {item.venue}
            </span>
            <span className="font-ubuntu">{item.bookDate}</span>
          </div>
          <div className="flex flex-col item-start">
            <span className="font-medium">{item.nameLastname}</span>
            <span className="font-ubuntu text-slate-500">{item.tel}</span>
          </div>
          <button
            className="absolute bottom-4 right-4 hover:bg-red-300 bg-slate-200 transition-colors rounded-md p-2"
            onClick={() => dispatch(removeBooking(item))}
          >
            🗑️ {/* ใช้ Emoji แทน Trash2 */}
          </button>
        </div>
      ))}
    </main>
  );
};

export default BookingList;
