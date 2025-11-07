import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      {/* 🖼️ Dashboard banner */}
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          position: "relative",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <Image
          src="/dashboard.png"
          alt="Dashboard Banner"
          width={700}
          height={250}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
          priority
        />
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            textShadow: "0 2px 8px rgba(0,0,0,0.6)",
          }}
        >
          Welcome to Your Dashboard
        </h1>
      </div>

      {/* 👤 User Info */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="GitHub Profile"
            width={100}
            height={100}
            style={{
              borderRadius: "50%",
              border: "2px solid #0070f3",
            }}
          />
        )}
        <h2 style={{ marginTop: "15px" }}>{session.user.name}</h2>
        <p>{session.user.email}</p>
      </div>
    </div>
  );
}
