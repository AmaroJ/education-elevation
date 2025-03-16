
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden section-padding pt-32">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-[100px] -z-10" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
                Aprende de manera inteligente
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                Domina cualquier idioma con <span className="text-primary">IA personalizada</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Nuestra plataforma de aprendizaje potenciada por inteligencia artificial se adapta a tu nivel, 
              estilo de aprendizaje y objetivos para ofrecerte una experiencia única y efectiva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="primary-button group"
                onClick={() => navigate('/module/basic-conversation')}
              >
                Comenzar gratis
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="secondary-button"
              >
                Ver planes
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-background bg-primary/10 flex items-center justify-center text-xs font-medium text-primary"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Más de <span className="font-medium text-foreground">10,000+</span> estudiantes activos</p>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 rounded-3xl -z-10" />
            
            <div className="glass-card p-6 md:p-8 max-w-md mx-auto lg:ml-auto lg:mr-0 animate-float shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Tu plan de aprendizaje</h3>
              <div className="space-y-4">
                {['Conversación', 'Gramática', 'Vocabulario', 'Pronunciación'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-sm text-muted-foreground">Módulo {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="accent-button w-full mt-6">
                Ver mi plan completo
              </Button>
            </div>
            
            <div className="glass-card p-4 absolute top-10 -right-6 rotate-6 animate-pulse-soft shadow-soft">
              <p className="font-medium">¡Lección completada!</p>
              <p className="text-sm text-muted-foreground">+25 puntos</p>
            </div>
            
            <div className="glass-card p-4 absolute bottom-20 -left-6 -rotate-3 animate-pulse-soft shadow-soft">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  🔥
                </div>
                <p className="font-medium">¡Racha de 7 días!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
