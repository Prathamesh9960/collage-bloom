import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap, MapPin, Trophy, TrendingUp } from "lucide-react";

const allColleges = [
  {
    name: "College of Engineering Pune (COEP)",
    district: "Pune",
    ranking: 1,
    cutoff: { CSE: 99.6, IT: 97.8, Mechanical: 95.2, AIML: 99.6 },
    placements: { average: "8 LPA", highest: "50 LPA" },
    img: "https://th.bing.com/th/id/R.7879a90ee339b5015e87864cb224b160?rik=BXeRgtFMBEn3Wg&riu=http%3a%2f%2fi2.wp.com%2fwww.campustimespune.com%2fwp-content%2fuploads%2f2015%2f06%2fcoep-pune-campus-pics.jpg%3fresize%3d588%252C391&ehk=fUYi1eSOi0MUZzSFdEkk7QYnXOaHzZt4INSMfV2K0Ks%3d&risl=&pid=ImgRaw&r=0",
    site: "https://www.coep.org.in/",
    established: "1854",
    type: "Government"
  },
  {
    name: "Pune Institute of Computer Technology (PICT)",
    district: "Pune",
    ranking: 2,
    cutoff: { CSE: 99.6, IT: 96.9, ENTC: 95.8, AIDS: 99.5 },
    placements: { average: "7 LPA", highest: "44 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.-YFT1U3JOhQbZRQw1ZiRowHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pict.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Vishwakarma Institute of Technology (VIT Pune)",
    district: "Pune",
    ranking: 3,
    cutoff: { CSE: 96.7, IT: 95.9, Mechanical: 93.5, AIDS: 98.0 },
    placements: { average: "6.5 LPA", highest: "41 LPA" },
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20241220170538941535/Vishwakarma-Institute-of-Technology.webp",
    site: "https://www.vit.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "MIT World Peace University (MIT-WPU)",
    district: "Pune",
    ranking: 4,
    cutoff: { CSE: 95.2, IT: 94.5, Mechanical: 92.1, AIDS: 95.6 },
    placements: { average: "5.8 LPA", highest: "35 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.gRRt6ZKyEgoh0rHWnsyLkQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://mitwpu.edu.in/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Bharati Vidyapeeth College of Engineering (BVCOE Pune)",
    district: "Pune",
    ranking: 5,
    cutoff: { CSE: 94.8, IT: 93.6, ENTC: 91.5, AIML: 93.9 },
    placements: { average: "5 LPA", highest: "30 LPA" },
    img: "https://th.bing.com/th/id/R.0917073d56d2a5d8901eee2a89c7128d?rik=0OPVLMdH%2bHeY5w&riu=http%3a%2f%2fcoewpune.bharatividyapeeth.edu%2fmedia%2fimages%2fcoewpune_homepage.jpg&ehk=M1NCsorlKC6JLPGgDnwOPeaZSd%2bKYWlzCFWyC8cqyaA%3d&risl=&pid=ImgRaw&r=0",
    site: "https://bvcoe.bharatividyapeeth.edu/",
    established: "1983",
    type: "Private"
  },
  {
    name: "Sinhgad College of Engineering (SCOE Pune)",
    district: "Pune",
    ranking: 6,
    cutoff: { CSE: 93.2, IT: 92.5, Mechanical: 90.8 },
    placements: { average: "4.8 LPA", highest: "28 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3075/2018/7/16/Sinhgad-College-of-Engineering-Pune-Campus6.jpg",
    site: "http://scoe.sinhgad.edu/",
    established: "1996",
    type: "Private"
  }
];

const Colleges = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-6 text-center content-fade-up">
          <h1 className="text-4xl font-bold mb-4 text-primary">All Colleges</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover comprehensive information about top engineering colleges with detailed rankings, cutoffs, and placement records.
          </p>
        </div>
      </section>

      {/* Colleges List */}
      <section className="container mx-auto px-6 py-12">
        <div className="space-y-8">
          {allColleges.map((college, index) => (
            <Card 
              key={college.name}
              className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-primary overflow-hidden card-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img 
                    src={college.img} 
                    alt={college.name}
                    className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-white font-bold text-lg px-3 py-1">
                      #{college.ranking}
                    </Badge>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300 mb-2">
                      {college.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {college.district}
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        Est. {college.established}
                      </span>
                      <Badge variant="outline">{college.type}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">Placement Statistics</h4>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-accent" />
                            Average: {college.placements.average}
                          </span>
                          <span className="text-highlight font-semibold">
                            Highest: {college.placements.highest}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">Cutoff Percentiles</h4>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(college.cutoff).map(([branch, cutoff]) => (
                            <Badge key={branch} variant="outline" className="text-xs">
                              {branch}: {cutoff}%
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        variant="college" 
                        size="lg"
                        className="group"
                        asChild
                      >
                        <a href={college.site} target="_blank" rel="noopener noreferrer">
                          Visit Official Website
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Colleges;