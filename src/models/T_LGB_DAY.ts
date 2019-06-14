import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_LGB_DAY', {schema: 'dbo' } )
export class T_LGB_DAY {

    @Column('datetime', {
        nullable: false,
        primary: true,
        name: 'LGD_DATE_DAT',
        })
    public LGD_DATE_DAT: Date;

    @Column('int', {
        nullable: false,
        primary: true,
        name: 'LGD_SUBDEPARTMENT_N',
        })
    public LGD_SUBDEPARTMENT_N: number;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_STOCKPV_D',
        })
    public LGD_STOCKPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_STOCKPF_D',
        })
    public LGD_STOCKPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_INVENTORYPV_D',
        })
    public LGD_INVENTORYPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_INVENTORYPF_D',
        })
    public LGD_INVENTORYPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_LASTLORRYPV_D',
        })
    public LGD_LASTLORRYPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_LASTLORRYPF_D',
        })
    public LGD_LASTLORRYPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_STOCKUSERPV_D',
        })
    public LGD_STOCKUSERPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_STOCKUSERPF_D',
        })
    public LGD_STOCKUSERPF_D: number | null;

    @Column('char', {
        nullable: true,
        name: 'LGD_SALESTREATED_C',
        })
    public LGD_SALESTREATED_C: string | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_RECEPTPV_D',
        })
    public LGD_RECEPTPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_RECEPTPF_D',
        })
    public LGD_RECEPTPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_RETOURPV_D',
        })
    public LGD_RETOURPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_RETOURPF_D',
        })
    public LGD_RETOURPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_TRANSFERTPV_D',
        })
    public LGD_TRANSFERTPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_TRANSFERTPF_D',
        })
    public LGD_TRANSFERTPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_LOCALPRICE_D',
        })
    public LGD_LOCALPRICE_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_CASSEPV_D',
        })
    public LGD_CASSEPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_CASSEPF_D',
        })
    public LGD_CASSEPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_VOLPV_D',
        })
    public LGD_VOLPV_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 15,
        scale: 3,
        name: 'LGD_VOLPF_D',
        })
    public LGD_VOLPF_D: number | null;

    @Column('decimal', {
        nullable: true,
        precision: 14,
        scale: 2,
        name: 'LGD_MINOMAJO_D',
        })
    public LGD_MINOMAJO_D: number | null;

}
