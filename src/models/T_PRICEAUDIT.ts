import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEAUDIT', {schema: 'dbo' } )
export class T_PRICEAUDIT {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:10,
        // scale:0,
        name: 'PRA_AUDIT_N',
        })
    public PRA_AUDIT_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PRA_CREATION_DAT',
        })
    public PRA_CREATION_DAT: Date | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PRA_USERID_C',
        })
    public PRA_USERID_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRA_PDTDATE_DAT',
        })
    public PRA_PDTDATE_DAT: Date | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMCHECKED_N',
        })
    public PRA_NUMCHECKED_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMERROR_N',
        })
    public PRA_NUMERROR_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMINACTIF_N',
        })
    public PRA_NUMINACTIF_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMLABEL_N',
        })
    public PRA_NUMLABEL_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMUNKNOWN_N',
        })
    public PRA_NUMUNKNOWN_N: number | null;

    @Column('int', {
        nullable: true,
        name: 'PRA_NUMLINES_N',
        })
    public PRA_NUMLINES_N: number | null;

    @Column('char', {
        nullable: true,
        name: 'PRA_FILETOOLD_C',
        })
    public PRA_FILETOOLD_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'PRA_COMPETITOR_C',
        })
    public PRA_COMPETITOR_C: string | null;

    @Column('datetime', {
        nullable: true,
        name: 'PRA_EXPORT_DAT',
        })
    public PRA_EXPORT_DAT: Date | null;

}
