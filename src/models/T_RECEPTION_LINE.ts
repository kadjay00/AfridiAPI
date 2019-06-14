import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_RECEPTION_LINE', {schema: 'dbo' } )
@Index('IX_RECEPTION_LINE_DOCNUMBER', ['REL_RECEPTION_N', 'REL_DOCNUMBER_C'])
@Index('IX_RECEPTION_LINE_SHIPPINGNOTE', ['REL_RECEPTION_N', 'REL_SHIPPINGNOTE_N'])
@Index('ix_shippingnote', ['REL_SHIPPINGNOTE_N'])
export class T_RECEPTION_LINE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 13,
        name: 'REL_SUPPLIERID_C',
        })
    public REL_SUPPLIERID_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 18,
        name: 'REL_DOCNUMBER_C',
        })
    public REL_DOCNUMBER_C: string;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'REL_SHIPPINGNOTE_N',
        })
    public REL_SHIPPINGNOTE_N: number | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'REL_RECEPTION_N',
        })
    public REL_RECEPTION_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'REL_STATUS_C',
        })
    public REL_STATUS_C: string | null;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'REL_SESSION_N',
        })
    public REL_SESSION_N: number;

    @Column('char', {
        nullable: true,
        name: 'REL_PDTSELECT_C',
        })
    public REL_PDTSELECT_C: string | null;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'REL_LITIGE_N',
        })
    public REL_LITIGE_N: number | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'REL_DOCTYPE_C',
        })
    public REL_DOCTYPE_C: string | null;

}
