// =====================================================================
//  CONFIGURAÇÃO DO FIREBASE — projeto fibra-optica-34ed1
// =====================================================================
// Cole aqui o objeto "firebaseConfig" que o Firebase mostra ao registrar
// o app Web. Esses dados podem ficar públicos: quem protege o banco são
// as regras do arquivo firestore.rules.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAZuHBbTtLtNDTJeRgPlCV6ukV5OZog2HM",
  authDomain: "fibra-optica-34ed1.firebaseapp.com",
  projectId: "fibra-optica-34ed1",
  storageBucket: "fibra-optica-34ed1.firebasestorage.app",
  messagingSenderId: "510871023278",
  appId: "1:510871023278:web:27b5a055e4c4002c56c73f"
};

// E-mail(s) do administrador, em letras minúsculas.
// O administrador vê a aba "Acesso", libera os e-mails dos funcionários,
// importa dados e é o único que pode excluir registros.
// Use os MESMOS e-mails na função admins() do arquivo firestore.rules.
window.ADMIN_EMAILS = ["alisondeep2025@gmail.com", "claudiodusguri@gmail.com", "alisonvieiradasilva1995@gmail.com"];
