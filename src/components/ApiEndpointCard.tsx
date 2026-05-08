import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import type { ApiEndpoint } from '../types/api';
import { Copy, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ApiEndpointCardProps {
  endpoint: ApiEndpoint;
}

// Simple JSON syntax highlighter helper
function HighlightedJson({ jsonString }: { jsonString: string }) {
  const formatJson = (str: string) => {
    try {
      const parsed = JSON.parse(str);
      const formatted = JSON.stringify(parsed, null, 2);
      return formatted.split('\n').map((line, i) => {
        // Colorize keys
        const highlightedLine = line.replace(/"([^"]+)":/g, '<span class="text-blue-600 dark:text-blue-400">"$1"</span>:');
        // Colorize string values
        const withStrings = highlightedLine.replace(/: "([^"]+)"/g, ': <span class="text-emerald-600 dark:text-emerald-400">"$1"</span>');
        // Colorize number values
        const withNumbers = withStrings.replace(/: ([0-9]+)/g, ': <span class="text-amber-600 dark:text-amber-400 font-bold">$1</span>');
        // Colorize booleans
        const withBooleans = withNumbers.replace(/: (true|false)/g, ': <span class="text-violet-600 dark:text-violet-400 font-bold">$1</span>');
        
        return <div key={i} dir="ltr" className="text-left" dangerouslySetInnerHTML={{ __html: withBooleans || line }} />;
      });
    } catch (e) {
      return <div dir="ltr" className="text-left">{str}</div>;
    }
  };

  return <div className="text-xs sm:text-sm font-mono text-foreground/80 dark:text-muted-foreground">{formatJson(jsonString)}</div>;
}

export function ApiEndpointCard({ endpoint }: ApiEndpointCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const methodColors = {
    GET: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400',
    POST: 'bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400',
    PUT: 'bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400',
    DELETE: 'bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400',
  };

  return (
    <motion.div 
      whileHover={{ y: -6 }} 
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Card className="rounded-[2rem] border border-border bg-card p-0 shadow-lg overflow-hidden h-full flex flex-col group-hover:border-primary/30 group-hover:shadow-2xl transition-all duration-500">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/50">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-primary transition-colors" />
            <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">REST API // {endpoint.id}</span>
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-border" />
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col bg-background/30">
          <div className="flex items-center gap-4 mb-6">
            <Badge className={`font-mono text-[10px] px-3 py-1 rounded-xl border-none shadow-sm ${methodColors[endpoint.method] || methodColors.GET}`}>
              {endpoint.method}
            </Badge>
            <div dir="ltr" className="font-mono text-xs sm:text-sm text-foreground/90 font-bold tracking-wide bg-muted px-4 py-1.5 rounded-xl border border-border shadow-inner">
              {endpoint.path}
            </div>
            <button className={`opacity-0 group-hover:opacity-100 transition-opacity bg-muted p-2 rounded-xl hover:bg-muted/80 border border-border ${isRTL ? 'mr-auto' : 'ml-auto'}`}>
               <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <p className="text-foreground/80 dark:text-muted-foreground text-sm leading-relaxed mb-8 font-medium">
            {endpoint.description}
          </p>

          <div className="mt-auto space-y-5">
            <div className="rounded-2xl bg-muted/50 border border-border p-6 relative overflow-hidden group/code shadow-inner">
              <div className={`absolute top-0 ${isRTL ? 'left-0 border-r rounded-br-xl' : 'right-0 border-l rounded-bl-xl'} px-3 py-1 bg-background border-b border-border text-[9px] uppercase tracking-widest text-primary font-bold`}>
                {t('apiDesign.request')}
              </div>
              <HighlightedJson jsonString={endpoint.request || ''} />
            </div>
            <div className="rounded-2xl bg-muted/50 border border-border p-6 relative overflow-hidden group/code shadow-inner">
              <div className={`absolute top-0 ${isRTL ? 'left-0 border-r rounded-br-xl' : 'right-0 border-l rounded-bl-xl'} px-3 py-1 bg-primary/10 border-b border-border text-[9px] uppercase tracking-widest text-primary font-bold`}>
                {t('apiDesign.response')} 200 OK
              </div>
              <HighlightedJson jsonString={endpoint.response || ''} />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
