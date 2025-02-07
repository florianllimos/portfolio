<footer id="footer" role="contentinfo">
  <div class="container-footer-newsletter" id="newsletter">
    <h2 class="title-footer">Newsletter</h2>
    <form class="form-newsletter" method="POST" action="component/traitement-newsletter.php" aria-label="Formulaire d'inscription à la newsletter">
      <input type="email" name="emailnewsletter" required placeholder="Adresse e-mail" id="input-newsletter" aria-label="Adresse e-mail pour l'inscription à la newsletter">
      <button type="submit" id="btn-newsletter" name="submit_newsletter" aria-label="S'inscrire à la newsletter">Inscription</button>
      <div class="bloc-newsletter">
        <?php
          require_once("component/database.php");
        ?>
      </div>  
    </form>
  </div>
  <p class="copyright" role="contentinfo">Copyright 2025 Florian LLIMOS.</p>
</footer>