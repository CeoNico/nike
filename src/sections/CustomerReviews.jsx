import ReviewCard from "@/components/ReviewCard"
import { reviews } from "@/const"


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Que Dicen <span className="text-coral-red">Nuestros</span> Clientes
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Aquí hay algunas historias de algunos clientes satisfechos</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-10">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName}
          imgUrl={review.imgURL} customerName={review.customerName} feedback={review.feedback} rating={review.rating} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews